/* ============================================
   Rendez-vous Page JS (rendezvous.html)
   ============================================
   This file handles:
   - Form submission for booking a rendez-vous
   - Saving the booking to Supabase
   - Showing success/error feedback to the user
   ============================================ */


// ===== HANDLE FORM SUBMISSION =====
// TODO: Listen for the form submit event and save data to Supabase
//
// document.getElementById('rendezvous-form').addEventListener('submit', async (e) => {
//     e.preventDefault();
//
//     // TODO: Get values from form inputs
//     // const fullName = document.getElementById('full-name').value;
//     // const phone = document.getElementById('phone').value;
//     // const email = document.getElementById('email').value;
//     // const preferredDate = document.getElementById('preferred-date').value;
//     // const message = document.getElementById('message').value;
//
//     // TODO: Insert into Supabase
//     // const { data, error } = await supabase
//     //     .from('rendezvous')
//     //     .insert([{
//     //         full_name: fullName,
//     //         phone: phone,
//     //         email: email,
//     //         preferred_date: preferredDate,
//     //         message: message
//     //     }]);
//
//     // TODO: Show feedback to the user
//     // if (error) {
//     //     alert('Une erreur est survenue. Veuillez réessayer.');
//     //     console.error(error);
//     // } else {
//     //     alert('Votre rendez-vous a été enregistré ! Nous vous contacterons bientôt.');
//     //     e.target.reset();
//     // }
// });


// ===== FORM VALIDATION =====
// TODO: Add client-side validation before submitting
// - Check that required fields are filled
// - Validate phone number format
// - Validate email format
// - Check that the date is in the future
// Hint: Bootstrap has built-in validation classes:
//   https://getbootstrap.com/docs/5.3/forms/validation/
