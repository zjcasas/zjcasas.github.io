$(window).ready(function(){

    // This function is for calculating all of the dice rolling math
    $('button[name="roll"]').on('click', function() {
        var typeDice = parseInt($('select[name="typeDice"]').val().replace("d", ""));
        // sets default number of dice to 1 if the user doesn't select anything
        var numDice = $('input[name="numDice"]').val();
        if (numDice.length === 0) {
            numDice = 1;
            $('input[name="numDice"]').val('1');
        }
        numDice= parseInt(numDice);
        // sets the default mod to +0 if the user doesn't select anything
        var modNum = $('input[name="modNum"]').val();
        if (modNum.length === 0) {
            modNum = 0;
            $('input[name="modNum"]').val('+0');
        }
        modNum= parseInt(modNum);
        // random numbers for each dice roll
        var rolls = [];
        for (i = 0; i < numDice; i++) {
            var roll = Math.ceil(Math.random() * typeDice);
            rolls.push(roll);
        }
        // definition of rules.
        var modrolls;
        var rule = $('select[name="rule"]').val();
        // first rule selects the highest roll and adds the modifier
        if (rule === "adv") {
            max = Math.max.apply(Math, rolls);
            modrolls = max + modNum;
        }
        // second rule selects the lowest roll and adds the modifier
        else if (rule === "dis") {
            var min = Math.min.apply(Math, rolls);
            modrolls = min + modNum;
        }
        // third rule drops the lowest roll, adds the rest and adds the modifier
        else if (rule === "drop") {
            var min = Math.min.apply(Math, rolls);
            rolls.splice($.inArray(min, rolls), 1);
            var rollstotal = 0;
            for (i = 0; i < rolls.length; i++) {
                rollstotal = rollstotal + rolls[i];
            }
            modrolls = rollstotal + modNum;
        }
        // default rule is None and just adds all of the rolls and modifier
        // Also sets the rule to None if the user doesn't select anything
        else {
            $('select[name="rule"]').val('none');
            var rollstotal = 0;
            for (i = 0; i < rolls.length; i++) {
                rollstotal = rollstotal + rolls[i];
            }
            modrolls = rollstotal + modNum;
        }

        var rollsspace = rolls.join(', ');
        $('#rolls').text('Rolls: ' + rollsspace);

        // sets the lowest roll possible to 1
        if (modrolls < 1){
            modrolls = 1;
        }

        $('#rollTotal').text('Roll Total: ' + modrolls);
    });

    // adds a "+" sign to all positive (and 0) modifier values
    $('input[name="modNum"]').blur(function() {
        var modNum = $(this).val();
        var hasPlus = modNum.indexOf('+');
        if (modNum.length === 0) {
        }
        else if (!isFinite(modNum)) {
            $(this).val('');
        }
        else if (modNum >= 0 && hasPlus < 0) {
            $(this).val('+' + modNum);
        }
    });

    // created my own up and down buttons for the number of dice and modifier
    // number so that I could have the "+" sign since the input type "number"
    // only allows numbers and the "-" sign
    $('#diceUp').on('click', function() {
        var numDice = $('input[name="numDice"]').val();
        if (numDice.length === 0) {
            $('input[name="numDice"]').val('1');
        }
        else {
            numDice = parseInt(numDice) + 1;
            $('input[name="numDice"]').val(numDice);
        }
    });
    $('#diceDown').on('click', function() {
        var numDice = $('input[name="numDice"]').val();
        if (numDice.length === 0) {
        }
        else if (numDice > 1){
            numDice = parseInt(numDice) - 1;
            $('input[name="numDice"]').val(numDice);
        }
    });
    $('#modUp').on('click', function() {
        var modNum = $('input[name="modNum"]').val();
        var hasMinus = modNum.indexOf('-');
        if (modNum.length === 0) {
            $('input[name="modNum"]').val('+1');
        }
        else if (hasMinus >= 0 && modNum < -1){
            modNum = parseInt(modNum) + 1;
            $('input[name="modNum"]').val(modNum);
        }
        else {
            modNum = parseInt(modNum) + 1;
            $('input[name="modNum"]').val('+' + modNum);
        }
    });
    $('#modDown').on('click', function() {
        var modNum = $('input[name="modNum"]').val();
        if (modNum.length === 0) {
            $('input[name="modNum"]').val('-1');
        }
        else if (modNum > 0 ){
            modNum = parseInt(modNum) - 1;
            $('input[name="modNum"]').val('+' + modNum);
        }
        else {
            modNum = parseInt(modNum) - 1;
            $('input[name="modNum"]').val(modNum);
        }
    });

    // because I added my own up and down buttons, I had to change the shadow to
    // go around those as well when the input box was in focus
    $('input[name="numDice"]').focus(function() {
        $('#diceUp').css('border-top', '1px solid rgb(173,51,34)');
        $('#diceUp').css('border-right', '1px solid rgb(173,51,34)');
        $('#diceDown').css('border-bottom', '1px solid rgb(173,51,34)');
        $('#diceDown').css('border-right', '1px solid rgb(173,51,34)');
    });
    $('input[name="numDice"]').blur(function() {
        $('#diceUp').css('border-top', '1px solid rgb(50, 50, 50)');
        $('#diceUp').css('border-right', '1px solid rgb(50, 50, 50)');
        $('#diceDown').css('border-bottom', '1px solid rgb(50, 50, 50)');
        $('#diceDown').css('border-right', '1px solid rgb(50, 50, 50)');
    });
    $('input[name="modNum"]').focus(function() {
        $('#modUp').css('border-top', '1px solid rgb(173,51,34)');
        $('#modUp').css('border-right', '1px solid rgb(173,51,34)');
        $('#modDown').css('border-bottom', '1px solid rgb(173,51,34)');
        $('#modDown').css('border-right', '1px solid rgb(173,51,34)');
    });
    $('input[name="modNum"]').blur(function() {
        $('#modUp').css('border-top', '1px solid rgb(50, 50, 50)');
        $('#modUp').css('border-right', '1px solid rgb(50, 50, 50)');
        $('#modDown').css('border-bottom', '1px solid rgb(50, 50, 50)');
        $('#modDown').css('border-right', '1px solid rgb(50, 50, 50)');
    });
});
