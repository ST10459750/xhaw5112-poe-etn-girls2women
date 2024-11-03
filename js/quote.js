// Attempt number 1

// $(document).ready(function() {
//   // Calculate Total Fees
//   $('#calculateBtn').click(function(event) {
//       event.preventDefault();

//       const selectedCourses = $(".course-checkbox:checked");
//       if (selectedCourses.length === 0) {
//           $("#summary").html(`<div class="alert alert-danger">Please select at least one course to generate a quote.</div>`);
//           return;
//       }

//       let sixMonthCourses = [];
//       let shortCourses = [];
//       let total = 0;

//       selectedCourses.each(function() {
//           const fee = parseInt($(this).val());
//           total += fee;

//           if ($(this).attr("data-category") === "sixMonth") {
//               sixMonthCourses.push({ name: $(this).next('label').text().trim(), fee });
//           } else {
//               shortCourses.push({ name: $(this).next('label').text().trim(), fee });
//           }
//       });

//       // Apply discount based on the number of selected courses
//       let discount = 0;
//       if (selectedCourses.length === 2) discount = total * 0.05;
//       else if (selectedCourses.length === 3) discount = total * 0.10;
//       else if (selectedCourses.length > 3) discount = total * 0.15;

//       const vat = (total - discount) * 0.15;
//       const totalPayable = total - discount + vat;

//       // Display summary with selected courses and calculated fees
//       let summaryHTML = `
//       <div>
//           <h3>Fee Calculation</h3>
//           <h5>Six-Month Courses</h5>
//           <ul>${sixMonthCourses.length > 0 ? sixMonthCourses.map(course => `<li>${course.name} - R${course.fee}</li>`).join("") : "<li>No course selected</li>"}</ul>
//           <h5>Six-Week Short Courses</h5>
//           <ul>${shortCourses.length > 0 ? shortCourses.map(course => `<li>${course.name} - R${course.fee}</li>`).join("") : "<li>No course selected</li>"}</ul>
//           <p><strong>Discount:</strong> -R${discount.toFixed(2)}</p>
//           <p><strong>Subtotal:</strong> R${total.toFixed(2)}</p>
//           <p><strong>VAT (15%):</strong> R${vat.toFixed(2)}</p>
//           <p><strong>Total Payable:</strong> R${totalPayable.toFixed(2)}</p>
//       </div>
//       `;

//       $("#summary").html(summaryHTML);
//   });

//   // Book Course
//   $('#bookBtn').click(function(event) {
//       event.preventDefault();

//       const email = $("#email").val();
//       if (!email) {
//           alert("Please enter your email address.");
//           return;
//       }

//       const selectedCourses = $(".course-checkbox:checked");
//       if (selectedCourses.length === 0) {
//           alert("Please select at least one course to book.");
//           return;
//       }

//       // Calculate total to show the summary in case it hasn't been calculated
//       $('#calculateBtn').trigger('click');

//       const summaryContent = $("#summary").html();
//       alert(`Booking confirmation sent to ${email} with the following details:\n\n${summaryContent}`);
//       console.log(`Email to ${email}:\n\n${summaryContent}`);

//       // Display booking confirmation toast
//       $("#toastBody").html(`Booking confirmation sent to ${email} with the following details:<br><br>${summaryContent}`);
//       const toast = new bootstrap.Toast($("#bookingToast")[0]);
//       toast.show();
//   });

//   // Clear Form
// $('#clearBtn').click(function() {
//       $("#bookingForm")[0].reset();
//       $("#summary").html("");
//       $("#bookingToast").hide();
//   });
// });


// Attempt number 2: 

// $(document).ready(function() {
//   // Calculate Total Fees
//   $('#calculateBtn').click(function(event) {
//       event.preventDefault();

//       const selectedCourses = $(".course-checkbox:checked");
//       if (selectedCourses.length === 0) {
//           $("#summary").html(`<div class="alert alert-danger">Please select at least one course to generate a quote.</div>`);
//           return;
//       }

//       let sixMonthCourses = [];
//       let shortCourses = [];
//       let total = 0;

//       selectedCourses.each(function() {
//           const fee = parseInt($(this).val());
//           total += fee;

//           if ($(this).attr("data-category") === "sixMonth") {
//               sixMonthCourses.push({ name: $(this).next('label').text().trim(), fee });
//           } else {
//               shortCourses.push({ name: $(this).next('label').text().trim(), fee });
//           }
//       });

//       // Apply discount based on the number of selected courses
//       let discount = 0;
//       if (selectedCourses.length === 2) discount = total * 0.05;
//       else if (selectedCourses.length === 3) discount = total * 0.10;
//       else if (selectedCourses.length > 3) discount = total * 0.15;

//       const vat = (total - discount) * 0.15;
//       const totalPayable = total - discount + vat;

//       // Display summary with selected courses and calculated fees
//       let summaryHTML = `
//       <div>
//           <h3>Fee Calculation</h3>
//           <h5>Six-Month Courses</h5>
//           <ul>${sixMonthCourses.length > 0 ? sixMonthCourses.map(course => `<li>${course.name} - R${course.fee}</li>`).join("") : "<li>No course selected</li>"}</ul>
//           <h5>Six-Week Short Courses</h5>
//           <ul>${shortCourses.length > 0 ? shortCourses.map(course => `<li>${course.name} - R${course.fee}</li>`).join("") : "<li>No course selected</li>"}</ul>
//           <p><strong>Discount:</strong> -R${discount.toFixed(2)}</p>
//           <p><strong>Subtotal:</strong> R${total.toFixed(2)}</p>
//           <p><strong>VAT (15%):</strong> R${vat.toFixed(2)}</p>
//           <p><strong>Total Payable:</strong> R${totalPayable.toFixed(2)}</p>
//       </div>
//       `;

//       $("#summary").html(summaryHTML);
//   });

//   // Book Course
//   $('#bookBtn').click(function(event) {
//       event.preventDefault();

//       const email = $("#email").val();
//       if (!email) {
//           alert("Please enter your email address.");
//           return;
//       }

//       const selectedCourses = $(".course-checkbox:checked");
//       if (selectedCourses.length === 0) {
//           alert("Please select at least one course to book.");
//           return;
//       }

//       // Calculate total to show the summary in case it hasn't been calculated
//       $('#calculateBtn').trigger('click');

//       const summaryContent = $("#summary").html();
//       console.log(`Email to ${email}:\n\n${summaryContent}`);

//       // Display booking confirmation toast
//       $("#toastBody").html(`Booking confirmation sent to ${email} with the following details:<br><br>${summaryContent}`);
//       const toast = new bootstrap.Toast($("#bookingToast")[0]);
//       toast.show();
//   });

//   // Clear Form
//   $('#clearBtn').click(function() {
//       $("#bookingForm")[0].reset();
//       $("#summary").html("");
//       $("#bookingToast").hide();
//   });
// });

// Attempt 3 

// $(document).ready(function() {
//     // Calculate Total Fees
//     $('#calculateBtn').click(function(event) {
//         event.preventDefault();

//         const selectedCourses = $(".course-checkbox:checked");
//         if (selectedCourses.length === 0) {
//             $("#summary").html(`<div class="alert alert-danger">Please select at least one course to generate a quote.</div>`);
//             return;
//         }

//         let sixMonthCourses = [];
//         let shortCourses = [];
//         let total = 0;

//         selectedCourses.each(function() {
//             const fee = parseInt($(this).val());
//             total += fee;

//             if ($(this).attr("data-category") === "sixMonth") {
//                 sixMonthCourses.push({ name: $(this).next('label').text().trim(), fee });
//             } else {
//                 shortCourses.push({ name: $(this).next('label').text().trim(), fee });
//             }
//         });

//         // Apply discount based on the number of selected courses
//         let discount = 0;
//         if (selectedCourses.length === 2) discount = total * 0.05;
//         else if (selectedCourses.length === 3) discount = total * 0.10;
//         else if (selectedCourses.length > 3) discount = total * 0.15;

//         const vat = (total - discount) * 0.15;
//         const totalPayable = total - discount + vat;

//         // Display summary with selected courses and calculated fees
//         let summaryHTML = `
//         <div>
//             <h3>Fee Calculation</h3>
//             <h5>Six-Month Courses</h5>
//             <ul>${sixMonthCourses.length > 0 ? sixMonthCourses.map(course => `<li>${course.name} - R${course.fee}</li>`).join("") : "<li>No course selected</li>"}</ul>
//             <h5>Six-Week Short Courses</h5>
//             <ul>${shortCourses.length > 0 ? shortCourses.map(course => `<li>${course.name} - R${course.fee}</li>`).join("") : "<li>No course selected</li>"}</ul>
//             <p><strong>Discount:</strong> -R${discount.toFixed(2)}</p>
//             <p><strong>Subtotal:</strong> R${total.toFixed(2)}</p>
//             <p><strong>VAT (15%):</strong> R${vat.toFixed(2)}</p>
//             <p><strong>Total Payable:</strong> R${totalPayable.toFixed(2)}</p>
//         </div>
//         `;

//         $("#summary").html(summaryHTML);
//     });

//     // Book Course
//     $('#bookBtn').click(function(event) {
//         event.preventDefault();
//         const firstName = $('#firstName').val();
//         const lastName = $('#lastName').val();
//         const email = $('#email').val();
//         const selectedCourses = $(".course-checkbox:checked");
        
//         if (selectedCourses.length === 0) {
//             alert("Please select at least one course to book.");
//             return;
//         }

//         // Create confirmation message
//         let courseNames = [];
//         selectedCourses.each(function() {
//             courseNames.push($(this).next('label').text().trim());
//         });
        
//         const message = `Thank you ${firstName} ${lastName} for booking the following courses:\n${courseNames.join(", ")}\nA confirmation has been sent to ${email}.`;

//         // Show toast notification
//         $("#toastBody").text(message);
//         $('#bookingToast').toast({ autohide: true, delay: 3000 });
//         $('#bookingToast').toast('show');

//         // Clear form after booking
//         $('#bookingForm')[0].reset();
//         $("#summary").html('');
//     });

//     // Clear Form Button
//     $('#clearBtn').click(function() {
//         $('#bookingForm')[0].reset();
//         $("#summary").html('');
//     });
// });

// ATTEMPT 4 

$(document).ready(function() {
    // Calculate Total Fees
    $('#calculateBtn').click(function(event) {
        event.preventDefault();

        const selectedCourses = $(".course-checkbox:checked");
        if (selectedCourses.length === 0) {
            $("#summary").html(`<div class="alert alert-danger">Please select at least one course to generate a quote.</div>`);
            return;
        }

        let sixMonthCourses = [];
        let shortCourses = [];
        let total = 0;

        selectedCourses.each(function() {
            const fee = parseInt($(this).val());
            total += fee;

            if ($(this).attr("data-category") === "sixMonth") {
                sixMonthCourses.push({ name: $(this).next('label').text().trim(), fee });
            } else {
                shortCourses.push({ name: $(this).next('label').text().trim(), fee });
            }
        });

        // Apply discount based on the number of selected courses
        let discount = 0;
        if (selectedCourses.length === 2) discount = total * 0.05;
        else if (selectedCourses.length === 3) discount = total * 0.10;
        else if (selectedCourses.length > 3) discount = total * 0.15;

        const vat = (total - discount) * 0.15;
        const totalPayable = total - discount + vat;

        // Display summary with selected courses and calculated fees
        let summaryHTML = `
        <div>
            <h3>Fee Calculation</h3>
            <h5>Six-Month Courses</h5>
            <ul>${sixMonthCourses.length > 0 ? sixMonthCourses.map(course => `<li>${course.name} - R${course.fee}</li>`).join("") : "<li>No course selected</li>"}</ul>
            <h5>Six-Week Short Courses</h5>
            <ul>${shortCourses.length > 0 ? shortCourses.map(course => `<li>${course.name} - R${course.fee}</li>`).join("") : "<li>No course selected</li>"}</ul>
            <p><strong>Discount:</strong> -R${discount.toFixed(2)}</p>
            <p><strong>Subtotal:</strong> R${total.toFixed(2)}</p>
            <p><strong>VAT (15%):</strong> R${vat.toFixed(2)}</p>
            <p><strong>Total Payable:</strong> R${totalPayable.toFixed(2)}</p>
        </div>
        `;

        $("#summary").html(summaryHTML);
    });

    // Book Course Button
    $('#bookBtn').click(function(event) {
        event.preventDefault();
        const firstName = $('#firstName').val();
        const lastName = $('#lastName').val();
        const email = $('#email').val();
        const selectedCourses = $(".course-checkbox:checked");

        if (selectedCourses.length === 0) {
            alert("Please select at least one course to book.");
            return;
        }

        // Create confirmation message
        let courseNames = [];
        selectedCourses.each(function() {
            courseNames.push($(this).next('label').text().trim());
        });

        const message = `Thank you ${firstName} ${lastName} for booking the following courses:\n${courseNames.join(", ")}\nA confirmation has been sent to ${email}.`;

        // Show toast notification
        $("#toastBody").text(message);
        $('#bookingToast').toast({ autohide: true, delay: 3000 });
        $('#bookingToast').toast('show');

        // Clear form after booking
        $('#bookingForm')[0].reset();
        $("#summary").html('');
    });

    // Clear Form Button
    $('#clearBtn').click(function() {
        $('#bookingForm')[0].reset();
        $("#summary").html('');
    });
});

