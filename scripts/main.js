$(document).ready(function () {

/* ------===================------ Header --------================------- */
    
    initalCleanUp();

    function initalCleanUp() {
        $('#budget').hide();
        // $('#accounts').hide();
        $('#paycheck').hide();
    }

    function cleanUp() {
        $('#budget').hide();
        $('#accounts').hide();
        $('#paycheck').hide();

        $('#budgetBtn').removeClass('active');
        $('#accountsBtn').removeClass('active');
        $('#paycheckBtn').removeClass('active');

        $(".budgetBtn").html("Introduction");
        $(".accountsBtn").html("Education");
        $(".paycheckBtn").html("Employment");

    };

    function showSection(idClicked) {
        switch (idClicked) {
            case "budgetBtn":
                $('#budget').fadeIn();
                $('#budgetBtn').addClass("active");
                break;
            case "accountsBtn":
                $('#accounts').fadeIn();
                $('#accountsBtn').addClass("active");
                break;
            case "paycheckBtn":
                $('#paycheck').fadeIn();
                $('#paycheckBtn').addClass("active");
                break;
        };
    };

    function hideSection(idClicked) {
        switch (idClicked) {
            case "budgetBtn":
                $('#home').fadeOut();
                $('#budgetBtn').removeClass("active");
                break;
            case "accountsBtn":
                $('#accounts').fadeOut();
                $('#accountsBtn').removeClass("active");
                break;
            case "paycheckBtn":
                $('#paycheck').fadeOut();
                $('#paycheckBtn').removeClass("active");
                break;
        };
    };

    $('#budgetBtn').on('click', function (e) {
        e.preventDefault();
        if ($('#budgetBtn').hasClass("active")) {
            // $(".homeBtn").html("Home");
            // hideSection('budgetBtn');
        } else {
            cleanUp();
            // $(".homeBtn").html("{ Introduction }");
            showSection('budgetBtn');
            hideSection('accountsBtn');
            hideSection('paycheckBtn');
        }
    });

    $('#accountsBtn').on('click', function (e) {
        e.preventDefault();
        if ($('#accountsBtn').hasClass("active")) {
            // $(".homeBtn").html("Home");
            // hideSection('budgetBtn');
        } else {
            cleanUp();
            // $(".homeBtn").html("{ Introduction }");
            showSection('accountsBtn');
            hideSection('budgetBtn');
            hideSection('paycheckBtn');
        }
    });

    $('#paycheckBtn').on('click', function (e) {
        e.preventDefault();
        if ($('#paycheckBtn').hasClass("active")) {
            // $(".homeBtn").html("Home");
            // hideSection('budgetBtn');
        } else {
            cleanUp();
            // $(".homeBtn").html("{ Introduction }");
            showSection('paycheckBtn');
            hideSection('accountsBtn');
            hideSection('budgetBtn');
        }
    });


/*---------------------------Modal -------------------------*/
    
    const expenseModal = $('#expenseModal');
    const incomeModal = $('#incomeModal');
    const checkingModal = $('#checkingModal');
    const savingModal = $('#savingModal');    

    $('#expenseModalBtn').on('click', function (e) {
        e.preventDefault();
        expenseModal.removeClass('hide');
    })

    $('#incomeModalBtn').on('click', function (e) {
        e.preventDefault();
        incomeModal.removeClass('hide');
    })

    $('#checkingModalBtn').on('click', function (e) {
        e.preventDefault();
        checkingModal.removeClass('hide');
    })

    $('#savingModalBtn').on('click', function (e) {
        e.preventDefault();
        savingModal.removeClass('hide');
    })

    $('.close').on('click', function (e) {
        e.preventDefault();
        expenseModal.addClass('hide');
        incomeModal.addClass('hide');
        checkingModal.addClass('hide');
        savingModal.addClass('hide');
    })

    $(document).click(function(event) {
        if ($(event.target).closest('.modal').length) {
            expenseModal.addClass('hide');
            incomeModal.addClass('hide');
            checkingModal.addClass('hide');
            savingModal.addClass('hide');

        }
    })
})