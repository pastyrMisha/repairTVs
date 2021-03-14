"use strict"

document.addEventListener('DOMContentLoaded', function () {
    const orderForm = document.getElementById('order__form');
    orderForm.addEventListener('submit', orderFormSend);

    async function orderFormSend(e) {
        e.preventDefault();
        let error = formValidate(orderForm);

        let formData = new FormData(orderForm);

        if (error === 0) {
            orderForm.classList.add('order_sending');

            let response = await fetch('/order_sendmail.php', {
                method: 'POST',
                body: formData
            });
            if (response.ok) {
                let result = await response.json();
                if (result.message === '4') {
                orderForm.reset();
                orderForm.classList.remove('order_sending');
                orderForm.classList.add('_welldone');
                setTimeout(function () {
                    orderForm.classList.remove('_welldone');
                }, 2000);
            }
            } else {
                alert('Ошибка, повторите отправку позже!');
                orderForm.classList.remove('order_sending');
            }

        }
    }

    function formValidate(orderForm) {
        let error = 0;
        let formReq = document.querySelectorAll('._orderreq');

        for (let index = 0; index < formReq.length; index++) {
            const input = formReq[index];
            formRemoveError(input);

            if (input.classList.contains('_ordertel')) {
                if (telTest(input)) {
                    formAddError(input);
                    error++;
                }
            } else {
                if (input.value === '') {
                    formAddError(input);
                    error++;
                }
            }

        }
        return error;
    }



    function formAddError(input) {
        input.parentElement.classList.add('_error');
        input.classList.add('_error');
    }

    function formRemoveError(input) {
        input.parentElement.classList.remove('_error');
        input.classList.remove('_error');
    }
    // phone test function
    function telTest(input) {
        return !/^\+?[78][-\(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/.test(input.value)
    }

});