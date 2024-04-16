

qrCodeUrlPath: Contains the text or URL that will prompt the creation of a QR code.
qrCode: Holds the data for the generated QR code image.

showQrCode: Indicates whether the QR code generated will be shown or not.
handleChange Method:

updates the value entered in the input field to the qrCodeUrlPath state.
the toGenerateQrCode Method

creates a QR code image data URL from the qrCodeUrlPath using the QRCode.toDataURL() function.
uses the generated QR code to update the qrCode state.
To see the QR code, set showQrCode to true.
Sets qrCodeUrlPath to an empty string, clearing the input field.
Animate:

creates a text input area where the text or URL can be entered.
creates a button that activates the creation of QR codes.
renders the QR code image that was generated if showQrCode is set to true.
