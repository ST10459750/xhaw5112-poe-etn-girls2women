// Get URL parameters
const params = new URLSearchParams(window.location.search);
const total = params.get('total');
const discount = params.get('discount');
const vat = params.get('vat');
const payable = params.get('payable');

// Display the fees on the Fee Calculator page
document.getElementById('feeSummary').innerHTML = `
  <p><strong>Subtotal:</strong> R${total}</p>
  <p><strong>Discount:</strong> -R${discount}</p>
  <p><strong>VAT (15%):</strong> R${vat}</p>
  <p><strong>Total Payable:</strong> R${payable}</p>
`;
