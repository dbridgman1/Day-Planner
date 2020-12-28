$(document).ready(function() {
    // setting time to top of page
    let time =  moment().format('llll')
    $('#currentDay').text(time)    

    // saving and retrieving from localstorage
    $('.saveBtn1').on('click', function(){
        let value = $('#9').val();
        localStorage.setItem('event', value)
    });
    $('#9').val(localStorage.getItem('event'));

    $('.saveBtn2').on('click', function(){
        let value = $('#10').val();
        localStorage.setItem('event1', value)
    });
    $('#10').val(localStorage.getItem('event1'));

    $('.saveBtn3').on('click', function(){
        let value = $('#11').val();
        localStorage.setItem('event2', value)
    });
    $('#11').val(localStorage.getItem('event2'));

    $('.saveBtn4').on('click', function(){
        let value = $('#12').val();
        localStorage.setItem('event3', value)
    });
    $('#12').val(localStorage.getItem('event3'));

    $('.saveBtn5').on('click', function(){
        let value = $('#1').val();
        localStorage.setItem('event4', value)
    });
    $('#1').val(localStorage.getItem('event4'));

    $('.saveBtn6').on('click', function(){
        let value = $('#2').val();
        localStorage.setItem('event5', value)
    });
    $('#2').val(localStorage.getItem('event5'));

    $('.saveBtn7').on('click', function(){
        let value = $('#3').val();
        localStorage.setItem('event6', value)
    });
    $('#3').val(localStorage.getItem('event6'));

    $('.saveBtn8').on('click', function(){
        let value = $('#4').val();
        localStorage.setItem('event7', value)
    });
    $('#4').val(localStorage.getItem('event7'));

    $('.saveBtn9').on('click', function(){
        let value = $('#5').val();
        localStorage.setItem('event8', value)
    });
    $('#5').val(localStorage.getItem('event8'));




   
    
















});