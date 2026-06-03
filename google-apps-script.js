// =============================================
// MOVI — Google Apps Script
// এই script টা তোমার Google Sheet এ paste করবে
// Tools > Apps Script > এখানে paste করো
// =============================================

const SHEET_NAME = "Orders"; // Sheet এর নাম

function doPost(e) {
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName(SHEET_NAME);

    // Sheet না থাকলে বানাও
    if (!sheet) {
      sheet = ss.insertSheet(SHEET_NAME);
      // Header row বানাও
      sheet.appendRow([
        "Timestamp",
        "Order ID",
        "Full Name",
        "Phone",
        "Email",
        "Size (EU)",
        "Color",
        "Delivery Address",
        "Payment Method",
        "Drop",
        "Price (BDT)",
        "Status"
      ]);

      // Header styling
      var headerRange = sheet.getRange(1, 1, 1, 12);
      headerRange.setBackground("#111111");
      headerRange.setFontColor("#ffffff");
      headerRange.setFontWeight("bold");
      headerRange.setFontSize(11);
      sheet.setFrozenRows(1);

      // Column widths
      sheet.setColumnWidth(1, 160);  // Timestamp
      sheet.setColumnWidth(2, 120);  // Order ID
      sheet.setColumnWidth(3, 160);  // Name
      sheet.setColumnWidth(4, 130);  // Phone
      sheet.setColumnWidth(5, 200);  // Email
      sheet.setColumnWidth(6, 90);   // Size
      sheet.setColumnWidth(7, 90);   // Color
      sheet.setColumnWidth(8, 280);  // Address
      sheet.setColumnWidth(9, 140);  // Payment
      sheet.setColumnWidth(10, 100); // Drop
      sheet.setColumnWidth(11, 110); // Price
      sheet.setColumnWidth(12, 100); // Status
    }

    // Order data parse করো
    var data = JSON.parse(e.postData.contents);

    // Unique Order ID generate করো
    var orderId = "MOVI-" + new Date().getFullYear() + "-" + String(sheet.getLastRow()).padStart(4, "0");

    // Timestamp
    var timestamp = Utilities.formatDate(
      new Date(),
      "Asia/Dhaka",
      "dd/MM/yyyy HH:mm:ss"
    );

    // Sheet এ row add করো
    sheet.appendRow([
      timestamp,
      orderId,
      data.name || "",
      data.phone || "",
      data.email || "",
      data.size || "",
      data.color || "",
      data.address || "",
      data.payment || "",
      data.drop || "Drop 001",
      data.price || "3499",
      "Pending Payment"
    ]);

    // নতুন row টা style করো
    var lastRow = sheet.getLastRow();
    var rowRange = sheet.getRange(lastRow, 1, 1, 12);

    // Alternate row color
    if (lastRow % 2 === 0) {
      rowRange.setBackground("#f5f4f0");
    } else {
      rowRange.setBackground("#ffffff");
    }

    // Status cell কে yellow করো (Pending)
    sheet.getRange(lastRow, 12).setBackground("#FFF3CD").setFontColor("#856404");

    // Success response
    return ContentService
      .createTextOutput(JSON.stringify({
        success: true,
        orderId: orderId,
        message: "Order received successfully"
      }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    // Error response
    return ContentService
      .createTextOutput(JSON.stringify({
        success: false,
        error: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// GET request — test করার জন্য (browser এ link open করলে দেখাবে)
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({
      status: "MOVI Order System — Active",
      message: "POST request দিয়ে order submit করো"
    }))
    .setMimeType(ContentService.MimeType.JSON);
}

// =============================================
// TEST FUNCTION — Script editor থেকে run করো
// দেখবে Sheet এ একটা test row add হয়েছে
// =============================================
function testOrder() {
  var fakeEvent = {
    postData: {
      contents: JSON.stringify({
        name: "Test Customer",
        phone: "01700000000",
        email: "test@test.com",
        size: "42",
        color: "Chalk",
        address: "Dhaka, Bangladesh",
        payment: "bKash",
        drop: "Drop 001",
        price: "3499"
      })
    }
  };
  var result = doPost(fakeEvent);
  Logger.log(result.getContent());
}
