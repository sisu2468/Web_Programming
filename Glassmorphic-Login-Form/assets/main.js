/*=============== SHOW HIDDEN - PASSWORD ===============*/
const showHiddenPass = (inputPass, inputIcon) => {
        const input = document.getElementById(inputPass),
            iconEye = document.getElementById(inputIcon)


        iconEye.addEventListener('click', () => {
                // change password to text
                if (input.type === 'password') {
                    // switch to text
                    input.type = 'text'

                    // Add icon
                    iconEye.classList.add('ri-eye-line')

                    // Remove Icon
                    iconEye.classList.remove('ri-eye-off-line')

                } else {
                    // change password
                    input.type = 'password'

                    // Remove Icon
                    iconEye.classList.remove('ri-eye-lin')

                    // Add icon
                    iconEye.classList.add('ri-eye-off-linee')
                })
        }


        showHiddenPass('input-pass', 'input-icon')