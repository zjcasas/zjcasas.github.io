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
            var tempRolls = rolls.slice(); //creates a copy of rolls so you can still print out all of them
            tempRolls.splice($.inArray(min, tempRolls), 1);
            var rollstotal = 0;
            for (i = 0; i < tempRolls.length; i++) {
                rollstotal = rollstotal + tempRolls[i];
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

    // button to add another player level to the XP Calculator
    $('button[name="addLevel"]').on('click', function() {
        var html = `<div>
            <input type="number" name="numPlayers" placeholder="Number of Players" min="0">
            <span class="arrows">
                <div class="playerUp">
                    <div class='upArrow'></div>
                </div>
                <div class="playerDown">
                    <div class='downArrow'></div>
                </div>
            </span>
            <input type="number" name="level" placeholder="Player Level" min="1" max="20">
            <span class="arrows">
                <div class="playerLevelUp">
                    <div class='upArrow'></div>
                </div>
                <div class="playerLevelDown">
                    <div class='downArrow'></div>
                </div>
            </span>
        </div>`
        $('#allPlayers').append(html);
        window.scrollBy(0, 52);
    });

    // button to add another monster level to the Monster XP Calculator
    $('button[name="addMonster"]').on('click', function() {
        var html = `<div>
            <input type="number" name="numMonsters" placeholder="Number of Monsters" min="0">
            <span class="arrows">
                <div class="monsterUp">
                    <div class='upArrow'></div>
                </div>
                <div class="monsterDown">
                    <div class='downArrow'></div>
                </div>
            </span>
            <input type="number" name="cr" placeholder="Monster CR" min="0" max="30">
            <span class="arrows">
                <div class="crUp">
                    <div class='upArrow'></div>
                </div>
                <div class="crDown">
                    <div class='downArrow'></div>
                </div>
            </span>
        </div>`
        $('#allMonsters').append(html);
        window.scrollBy(0, 52);
    });

    //  This button is for calculating the encounter xp
    $('button[name="calc"]').on('click', function() {
        var playerCount = [];
        var levels = [];
        var xpArray = [];
        var totalXp = 0;
        var difficulty = $('select[name="difficulty"]').val();
        $('input[name="numPlayers"]').each(function() {
            var numPlayers = $(this).val();
            playerCount.push(numPlayers)
        })
        $('input[name="level"]').each(function() {
            var level = $(this).val();
            levels.push(level)
        })

        if (difficulty.length === 0 || playerCount.length === 0 || levels.length === 0) {
        }
        else {
            for (var i = 0; i < playerCount.length; i++) {
                var levelXp;
                if (difficulty == "easy") {
                    if (levels[i] == 1) {
                        levelXp = 25 * playerCount[i];
                    }
                    else if (levels[i] == 2) {
                        levelXp = 50 * playerCount[i];
                    }
                    else if (levels[i] == 3) {
                        levelXp = 75 * playerCount[i];
                    }
                    else if (levels[i] == 4) {
                        levelXp = 125 * playerCount[i];
                    }
                    else if (levels[i] == 5) {
                        levelXp = 250 * playerCount[i];
                    }
                    else if (levels[i] == 6) {
                        levelXp = 300 * playerCount[i];
                    }
                    else if (levels[i] == 7) {
                        levelXp = 350 * playerCount[i];
                    }
                    else if (levels[i] == 8) {
                        levelXp = 450 * playerCount[i];
                    }
                    else if (levels[i] == 9) {
                        levelXp = 550 * playerCount[i];
                    }
                    else if (levels[i] == 10) {
                        levelXp = 600 * playerCount[i];
                    }
                    else if (levels[i] == 11) {
                        levelXp = 800 * playerCount[i];
                    }
                    else if (levels[i] == 12) {
                        levelXp = 1000 * playerCount[i];
                    }
                    else if (levels[i] == 13) {
                        levelXp = 1100 * playerCount[i];
                    }
                    else if (levels[i] == 14) {
                        levelXp = 1250 * playerCount[i];
                    }
                    else if (levels[i] == 15) {
                        levelXp = 1400 * playerCount[i];
                    }
                    else if (levels[i] == 16) {
                        levelXp = 1600 * playerCount[i];
                    }
                    else if (levels[i] == 17) {
                        levelXp = 2000 * playerCount[i];
                    }
                    else if (levels[i] == 18) {
                        levelXp = 2100 * playerCount[i];
                    }
                    else if (levels[i] == 19) {
                        levelXp = 2400 * playerCount[i];
                    }
                    else if (levels[i] == 20) {
                        levelXp = 2800 * playerCount[i];
                    }
                    else {
                        levelXp = 0;
                    }
                }
                if (difficulty == "medium") {
                    if (levels[i] == 1) {
                        levelXp = 50 * playerCount[i];
                    }
                    else if (levels[i] == 2) {
                        levelXp = 100 * playerCount[i];
                    }
                    else if (levels[i] == 3) {
                        levelXp = 150 * playerCount[i];
                    }
                    else if (levels[i] == 4) {
                        levelXp = 250 * playerCount[i];
                    }
                    else if (levels[i] == 5) {
                        levelXp = 500 * playerCount[i];
                    }
                    else if (levels[i] == 6) {
                        levelXp = 600 * playerCount[i];
                    }
                    else if (levels[i] == 7) {
                        levelXp = 750 * playerCount[i];
                    }
                    else if (levels[i] == 8) {
                        levelXp = 900 * playerCount[i];
                    }
                    else if (levels[i] == 9) {
                        levelXp = 1100 * playerCount[i];
                    }
                    else if (levels[i] == 10) {
                        levelXp = 1200 * playerCount[i];
                    }
                    else if (levels[i] == 11) {
                        levelXp = 1600 * playerCount[i];
                    }
                    else if (levels[i] == 12) {
                        levelXp = 2000 * playerCount[i];
                    }
                    else if (levels[i] == 13) {
                        levelXp = 2200 * playerCount[i];
                    }
                    else if (levels[i] == 14) {
                        levelXp = 2500 * playerCount[i];
                    }
                    else if (levels[i] == 15) {
                        levelXp = 2800 * playerCount[i];
                    }
                    else if (levels[i] == 16) {
                        levelXp = 3200 * playerCount[i];
                    }
                    else if (levels[i] == 17) {
                        levelXp = 3900 * playerCount[i];
                    }
                    else if (levels[i] == 18) {
                        levelXp = 4200 * playerCount[i];
                    }
                    else if (levels[i] == 19) {
                        levelXp = 4900 * playerCount[i];
                    }
                    else if (levels[i] == 20) {
                        levelXp = 5700 * playerCount[i];
                    }
                    else {
                        levelXp = 0;
                    }
                }
                if (difficulty == "hard") {
                    if (levels[i] == 1) {
                        levelXp = 75 * playerCount[i];
                    }
                    else if (levels[i] == 2) {
                        levelXp = 150 * playerCount[i];
                    }
                    else if (levels[i] == 3) {
                        levelXp = 225 * playerCount[i];
                    }
                    else if (levels[i] == 4) {
                        levelXp = 375 * playerCount[i];
                    }
                    else if (levels[i] == 5) {
                        levelXp = 750 * playerCount[i];
                    }
                    else if (levels[i] == 6) {
                        levelXp = 900 * playerCount[i];
                    }
                    else if (levels[i] == 7) {
                        levelXp = 1100 * playerCount[i];
                    }
                    else if (levels[i] == 8) {
                        levelXp = 1400 * playerCount[i];
                    }
                    else if (levels[i] == 9) {
                        levelXp = 1600 * playerCount[i];
                    }
                    else if (levels[i] == 10) {
                        levelXp = 1900 * playerCount[i];
                    }
                    else if (levels[i] == 11) {
                        levelXp = 2400 * playerCount[i];
                    }
                    else if (levels[i] == 12) {
                        levelXp = 3000 * playerCount[i];
                    }
                    else if (levels[i] == 13) {
                        levelXp = 3400 * playerCount[i];
                    }
                    else if (levels[i] == 14) {
                        levelXp = 3800 * playerCount[i];
                    }
                    else if (levels[i] == 15) {
                        levelXp = 4300 * playerCount[i];
                    }
                    else if (levels[i] == 16) {
                        levelXp = 4800 * playerCount[i];
                    }
                    else if (levels[i] == 17) {
                        levelXp = 5900 * playerCount[i];
                    }
                    else if (levels[i] == 18) {
                        levelXp = 6300 * playerCount[i];
                    }
                    else if (levels[i] == 19) {
                        levelXp = 7300 * playerCount[i];
                    }
                    else if (levels[i] == 20) {
                        levelXp = 8500 * playerCount[i];
                    }
                    else {
                        levelXp = 0;
                    }
                }
                if (difficulty == "deadly") {
                    if (levels[i] == 1) {
                        levelXp = 100 * playerCount[i];
                    }
                    else if (levels[i] == 2) {
                        levelXp = 200 * playerCount[i];
                    }
                    else if (levels[i] == 3) {
                        levelXp = 400 * playerCount[i];
                    }
                    else if (levels[i] == 4) {
                        levelXp = 500 * playerCount[i];
                    }
                    else if (levels[i] == 5) {
                        levelXp = 1100 * playerCount[i];
                    }
                    else if (levels[i] == 6) {
                        levelXp = 1400 * playerCount[i];
                    }
                    else if (levels[i] == 7) {
                        levelXp = 1700 * playerCount[i];
                    }
                    else if (levels[i] == 8) {
                        levelXp = 2100 * playerCount[i];
                    }
                    else if (levels[i] == 9) {
                        levelXp = 2400 * playerCount[i];
                    }
                    else if (levels[i] == 10) {
                        levelXp = 2800 * playerCount[i];
                    }
                    else if (levels[i] == 11) {
                        levelXp = 3600 * playerCount[i];
                    }
                    else if (levels[i] == 12) {
                        levelXp = 4500 * playerCount[i];
                    }
                    else if (levels[i] == 13) {
                        levelXp = 5100 * playerCount[i];
                    }
                    else if (levels[i] == 14) {
                        levelXp = 5700 * playerCount[i];
                    }
                    else if (levels[i] == 15) {
                        levelXp = 6400 * playerCount[i];
                    }
                    else if (levels[i] == 16) {
                        levelXp = 7200 * playerCount[i];
                    }
                    else if (levels[i] == 17) {
                        levelXp = 8800 * playerCount[i];
                    }
                    else if (levels[i] == 18) {
                        levelXp = 9500 * playerCount[i];
                    }
                    else if (levels[i] == 19) {
                        levelXp = 10900 * playerCount[i];
                    }
                    else if (levels[i] == 20) {
                        levelXp = 12700 * playerCount[i];
                    }
                    else {
                        levelXp = 0;
                    }
                }
                xpArray.push(levelXp);
            }

            for (var i = 0; i <xpArray.length; i++) {
                totalXp = totalXp + xpArray[i];
            }
            $('#xpTotal').text('Total Encounter XP: ' + totalXp);
        }
    });

    //  This button is for calculating the monster xp
    $('button[name="calcMonster"]').on('click', function() {
        var monsterCount = [];
        var crs = [];
        var xpArray = [];
        var totalXp = 0;
        var totalMonsters = 0;
        var partySize = $('input[name="partySize"]').val();
        $('input[name="numMonsters"]').each(function() {
            var numMonsters = $(this).val();
            monsterCount.push(numMonsters)
        })
        $('input[name="cr"]').each(function() {
            var cr = $(this).val();
            crs.push(cr)
        })
        for (var i = 0; i < monsterCount.length; i++) {
            if (monsterCount[i] > 0 && crs[i] != "") {
                totalMonsters = totalMonsters + parseInt(monsterCount[i]);
            }
        }
        if (monsterCount.length === 0 || crs.length === 0) {
        }
        else {
            for (var i = 0; i < monsterCount.length; i++) {
                var crXp;
                if(crs[i] == "") {
                    crXp = 0;
                }
                else if (crs[i] == 0) {
                    crXp = 10 * monsterCount[i];
                }
                else if (crs[i] == .125) {
                    crXp = 25 * monsterCount[i];
                }
                else if (crs[i] == .25) {
                    crXp = 50 * monsterCount[i];
                }
                else if (crs[i] == .5) {
                    crXp = 100 * monsterCount[i];
                }
                else if (crs[i] == 1) {
                    crXp = 200 * monsterCount[i];
                }
                else if (crs[i] == 2) {
                    crXp = 450 * monsterCount[i];
                }
                else if (crs[i] == 3) {
                    crXp = 700 * monsterCount[i];
                }
                else if (crs[i] == 4) {
                    crXp = 1100 * monsterCount[i];
                }
                else if (crs[i] == 5) {
                    crXp = 1800 * monsterCount[i];
                }
                else if (crs[i] == 6) {
                    crXp = 2300 * monsterCount[i];
                }
                else if (crs[i] == 7) {
                    crXp = 2900 * monsterCount[i];
                }
                else if (crs[i] == 8) {
                    crXp = 3900 * monsterCount[i];
                }
                else if (crs[i] == 9) {
                    crXp = 5000 * monsterCount[i];
                }
                else if (crs[i] == 10) {
                    crXp = 5900 * monsterCount[i];
                }
                else if (crs[i] == 11) {
                    crXp = 7200 * monsterCount[i];
                }
                else if (crs[i] == 12) {
                    crXp = 8400 * monsterCount[i];
                }
                else if (crs[i] == 13) {
                    crXp = 10000 * monsterCount[i];
                }
                else if (crs[i] == 14) {
                    crXp = 11500 * monsterCount[i];
                }
                else if (crs[i] == 15) {
                    crXp = 13000 * monsterCount[i];
                }
                else if (crs[i] == 16) {
                    crXp = 15000 * monsterCount[i];
                }
                else if (crs[i] == 17) {
                    crXp = 18000 * monsterCount[i];
                }
                else if (crs[i] == 18) {
                    crXp = 20000 * monsterCount[i];
                }
                else if (crs[i] == 19) {
                    crXp = 22000 * monsterCount[i];
                }
                else if (crs[i] == 20) {
                    crXp = 25000 * monsterCount[i];
                }
                else if (crs[i] == 21) {
                    crXp = 33000 * monsterCount[i];
                }
                else if (crs[i] == 22) {
                    crXp = 41000 * monsterCount[i];
                }
                else if (crs[i] == 23) {
                    crXp = 50000 * monsterCount[i];
                }
                else if (crs[i] == 24) {
                    crXp = 62000 * monsterCount[i];
                }
                else if (crs[i] == 25) {
                    crXp = 75000 * monsterCount[i];
                }
                else if (crs[i] == 26) {
                    crXp = 90000 * monsterCount[i];
                }
                else if (crs[i] == 27) {
                    crXp = 105000 * monsterCount[i];
                }
                else if (crs[i] == 28) {
                    crXp = 120000 * monsterCount[i];
                }
                else if (crs[i] == 29) {
                    crXp = 135000 * monsterCount[i];
                }
                else if (crs[i] == 30) {
                    crXp = 155000 * monsterCount[i];
                }
                else {
                    crXp = 0;
                }
                xpArray.push(crXp);
            }

            for (var i = 0; i <xpArray.length; i++) {
                totalXp = totalXp + xpArray[i];
            }

            if (partySize < 3) {
                if (totalMonsters == 1) {
                    totalXp = totalXp * 1.5;
                }
                if (totalMonsters == 2) {
                    totalXp = totalXp * 2;
                }
                if (totalMonsters >= 3 && totalMonsters <= 6) {
                    totalXp = totalXp * 2.5;
                }
                if (totalMonsters >= 7 && totalMonsters <= 10) {
                    totalXp = totalXp * 3;
                }
                if (totalMonsters >= 11 && totalMonsters <= 14) {
                    totalXp = totalXp * 4;
                }
                if (totalMonsters >= 15) {
                    totalXp = totalXp * 5;
                }
            }
            else if (partySize >= 3 && partySize <= 5) {
                if (totalMonsters == 1) {
                }
                if (totalMonsters == 2) {
                    totalXp = totalXp * 1.5;
                }
                if (totalMonsters >= 3 && totalMonsters <= 6) {
                    totalXp = totalXp * 2;
                }
                if (totalMonsters >= 7 && totalMonsters <= 10) {
                    totalXp = totalXp * 2.5;
                }
                if (totalMonsters >= 11 && totalMonsters <= 14) {
                    totalXp = totalXp * 3;
                }
                if (totalMonsters >= 15) {
                    totalXp = totalXp * 4;
                }
            }
            else {
                if (totalMonsters == 1) {
                    totalXp = totalXp * .5;
                }
                if (totalMonsters == 2) {
                }
                if (totalMonsters >= 3 && totalMonsters <= 6) {
                    totalXp = totalXp * 1.5;
                }
                if (totalMonsters >= 7 && totalMonsters <= 10) {
                    totalXp = totalXp * 2;
                }
                if (totalMonsters >= 11 && totalMonsters <= 14) {
                    totalXp = totalXp * 2.5;
                }
                if (totalMonsters >= 15) {
                    totalXp = totalXp * 3;
                }
            }
            if(partySize > 0) {
                $('#monsterXpTotal').text('Total Monster XP: ' + totalXp);
            }
            else {
                $('#monsterXpTotal').text('Total Monster XP:');
            }
        }
    });

    // created my own up and down buttons for the number of dice and modifier
    // number so that I could have the "+" sign since the input type "number"
    // only allows numbers and the "-" sign
    // also adding up and down buttons for the encounter xp calculator and
    // monster xp calculator
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
    $('#allPlayers').on('click', '.playerUp', function() {
        var numPlayers = $(this).parent().prev('input[name="numPlayers"]').val();
        if (numPlayers.length === 0) {
            $(this).parent().prev('input[name="numPlayers"]').val('1');
        }
        else {
            numPlayers = parseInt(numPlayers) + 1;
            $(this).parent().prev('input[name="numPlayers"]').val(numPlayers);
        }
    });
    $('#allPlayers').on('click', '.playerDown', function() {
        var numPlayers = $(this).parent().prev('input[name="numPlayers"]').val();
        if (numPlayers.length === 0) {
            $(this).parent().prev('input[name="numPlayers"]').val('0');
        }
        else if (numPlayers > 0){
            numPlayers = parseInt(numPlayers) - 1;
            $(this).parent().prev('input[name="numPlayers"]').val(numPlayers);
        }
    });
    $('#allPlayers').on('click', '.playerLevelUp', function() {
        var level = $(this).parent().prev('input[name="level"]').val();
        if (level.length === 0) {
            $(this).parent().prev('input[name="level"]').val('1');
        }
        else if (level == 20) {
        }
        else {
            level = parseInt(level) + 1;
            $(this).parent().prev('input[name="level"]').val(level);
        }
    });
    $('#allPlayers').on('click', '.playerLevelDown', function() {
        var level = $(this).parent().prev('input[name="level"]').val();
        if (level.length === 0) {
        }
        else if (level > 1){
            level = parseInt(level) - 1;
            $(this).parent().prev('input[name="level"]').val(level);
        }
    });
    $('#allMonsters').on('click', '.monsterUp', function() {
        var numMonsters = $(this).parent().prev('input[name="numMonsters"]').val();
        if (numMonsters.length === 0) {
            $(this).parent().prev('input[name="numMonsters"]').val('1');
        }
        else {
            numMonsters = parseInt(numMonsters) + 1;
            $(this).parent().prev('input[name="numMonsters"]').val(numMonsters);
        }
    });
    $('#allMonsters').on('click', '.monsterDown', function() {
        var numMonsters = $(this).parent().prev('input[name="numMonsters"]').val();
        if (numMonsters.length === 0) {
            $(this).parent().prev('input[name="numMonsters"]').val('0');
        }
        else if (numMonsters > 0){
            numMonsters = parseInt(numMonsters) - 1;
            $(this).parent().prev('input[name="numMonsters"]').val(numMonsters);
        }
    });
    $('#allMonsters').on('click', '.crUp', function() {
        var cr = $(this).parent().prev('input[name="cr"]').val();
        if (cr.length === 0 || cr == 0) {
            $(this).parent().prev('input[name="cr"]').val('.125');
        }
        else if (cr == .125) {
            $(this).parent().prev('input[name="cr"]').val('.25');
        }
        else if (cr == .25) {
            $(this).parent().prev('input[name="cr"]').val('.5');
        }
        else if (cr == .5) {
            $(this).parent().prev('input[name="cr"]').val('1');
        }
        else if (cr == 30) {
        }
        else {
            cr = parseInt(cr) + 1;
            $(this).parent().prev('input[name="cr"]').val(cr);
        }
    });
    $('#allMonsters').on('click', '.crDown', function() {
        var cr = $(this).parent().prev('input[name="cr"]').val();
        if (cr.length === 0) {
            $(this).parent().prev('input[name="cr"]').val('0');
        }
        else if (cr == .125) {
            $(this).parent().prev('input[name="cr"]').val('0');
        }
        else if (cr == .25) {
            $(this).parent().prev('input[name="cr"]').val('.125');
        }
        else if (cr == .5) {
            $(this).parent().prev('input[name="cr"]').val('.25');
        }
        else if (cr == 1) {
            $(this).parent().prev('input[name="cr"]').val('.5');
        }
        else if (cr == 0) {
        }
        else {
            cr = parseInt(cr) - 1;
            $(this).parent().prev('input[name="cr"]').val(cr);
        }
    });
    $('#partyUp').on('click', function() {
        var partySize = $('input[name="partySize"]').val();
        if (partySize.length === 0) {
            $('input[name="partySize"]').val('1');
        }
        else {
            partySize = parseInt(partySize) + 1;
            $('input[name="partySize"]').val(partySize);
        }
    });
    $('#partyDown').on('click', function() {
        var partySize = $('input[name="partySize"]').val();
        if (partySize.length === 0) {
        }
        else if (partySize > 1){
            partySize = parseInt(partySize) - 1;
            $('input[name="partySize"]').val(partySize);
        }
    });

    // because I added my own up and down buttons, I had to change the shadow to
    // go around those as well when the input box was in focus
    $('input[name="numDice"]').focus(function() {
        $('#diceUp').css('border-top', '1px solid rgb(133, 38, 23)');
        $('#diceUp').css('border-right', '1px solid rgb(133, 38, 23)');
        $('#diceDown').css('border-bottom', '1px solid rgb(133, 38, 23)');
        $('#diceDown').css('border-right', '1px solid rgb(133, 38, 23)');
    });
    $('input[name="numDice"]').blur(function() {
        $('#diceUp').css('border-top', '1px solid rgb(50, 50, 50)');
        $('#diceUp').css('border-right', '1px solid rgb(50, 50, 50)');
        $('#diceDown').css('border-bottom', '1px solid rgb(50, 50, 50)');
        $('#diceDown').css('border-right', '1px solid rgb(50, 50, 50)');
    });
    $('input[name="modNum"]').focus(function() {
        $('#modUp').css('border-top', '1px solid rgb(133, 38, 23)');
        $('#modUp').css('border-right', '1px solid rgb(133, 38, 23)');
        $('#modDown').css('border-bottom', '1px solid rgb(133, 38, 23)');
        $('#modDown').css('border-right', '1px solid rgb(133, 38, 23)');
    });
    $('input[name="modNum"]').blur(function() {
        $('#modUp').css('border-top', '1px solid rgb(50, 50, 50)');
        $('#modUp').css('border-right', '1px solid rgb(50, 50, 50)');
        $('#modDown').css('border-bottom', '1px solid rgb(50, 50, 50)');
        $('#modDown').css('border-right', '1px solid rgb(50, 50, 50)');
    });
    $('#allPlayers').on('focus', 'input[name="numPlayers"]', function() {
        $(this).next().find('.playerUp').css('border-top', '1px solid rgb(133, 38, 23)');
        $(this).next().find('.playerUp').css('border-right', '1px solid rgb(133, 38, 23)');
        $(this).next().find('.playerDown').css('border-bottom', '1px solid rgb(133, 38, 23)');
        $(this).next().find('.playerDown').css('border-right', '1px solid rgb(133, 38, 23)');
    });
    $('#allPlayers').on('blur', 'input[name="numPlayers"]', function() {
        $(this).next().find('.playerUp').css('border-top', '1px solid rgb(50, 50, 50)');
        $(this).next().find('.playerUp').css('border-right', '1px solid rgb(50, 50, 50)');
        $(this).next().find('.playerDown').css('border-bottom', '1px solid rgb(50, 50, 50)');
        $(this).next().find('.playerDown').css('border-right', '1px solid rgb(50, 50, 50)');
    });
    $('#allPlayers').on('focus', 'input[name="level"]', function() {
        $(this).next().find('.playerLevelUp').css('border-top', '1px solid rgb(133, 38, 23)');
        $(this).next().find('.playerLevelUp').css('border-right', '1px solid rgb(133, 38, 23)');
        $(this).next().find('.playerLevelDown').css('border-bottom', '1px solid rgb(133, 38, 23)');
        $(this).next().find('.playerLevelDown').css('border-right', '1px solid rgb(133, 38, 23)');
    });
    $('#allPlayers').on('blur', 'input[name="level"]', function() {
        $(this).next().find('.playerLevelUp').css('border-top', '1px solid rgb(50, 50, 50)');
        $(this).next().find('.playerLevelUp').css('border-right', '1px solid rgb(50, 50, 50)');
        $(this).next().find('.playerLevelDown').css('border-bottom', '1px solid rgb(50, 50, 50)');
        $(this).next().find('.playerLevelDown').css('border-right', '1px solid rgb(50, 50, 50)');
    });
    $('#allMonsters').on('focus', 'input[name="numMonsters"]', function() {
        $(this).next().find('.monsterUp').css('border-top', '1px solid rgb(133, 38, 23)');
        $(this).next().find('.monsterUp').css('border-right', '1px solid rgb(133, 38, 23)');
        $(this).next().find('.monsterDown').css('border-bottom', '1px solid rgb(133, 38, 23)');
        $(this).next().find('.monsterDown').css('border-right', '1px solid rgb(133, 38, 23)');
    });
    $('#allMonsters').on('blur', 'input[name="numMonsters"]', function() {
        $(this).next().find('.monsterUp').css('border-top', '1px solid rgb(50, 50, 50)');
        $(this).next().find('.monsterUp').css('border-right', '1px solid rgb(50, 50, 50)');
        $(this).next().find('.monsterDown').css('border-bottom', '1px solid rgb(50, 50, 50)');
        $(this).next().find('.monsterDown').css('border-right', '1px solid rgb(50, 50, 50)');
    });
    $('#allMonsters').on('focus', 'input[name="cr"]', function() {
        $(this).next().find('.crUp').css('border-top', '1px solid rgb(133, 38, 23)');
        $(this).next().find('.crUp').css('border-right', '1px solid rgb(133, 38, 23)');
        $(this).next().find('.crDown').css('border-bottom', '1px solid rgb(133, 38, 23)');
        $(this).next().find('.crDown').css('border-right', '1px solid rgb(133, 38, 23)');
    });
    $('#allMonsters').on('blur', 'input[name="cr"]', function() {
        $(this).next().find('.crUp').css('border-top', '1px solid rgb(50, 50, 50)');
        $(this).next().find('.crUp').css('border-right', '1px solid rgb(50, 50, 50)');
        $(this).next().find('.crDown').css('border-bottom', '1px solid rgb(50, 50, 50)');
        $(this).next().find('.crDown').css('border-right', '1px solid rgb(50, 50, 50)');
    });
    $('input[name="partySize"]').focus(function() {
        $('#partyUp').css('border-top', '1px solid rgb(133, 38, 23)');
        $('#partyUp').css('border-right', '1px solid rgb(133, 38, 23)');
        $('#partyDown').css('border-bottom', '1px solid rgb(133, 38, 23)');
        $('#partyDown').css('border-right', '1px solid rgb(133, 38, 23)');
    });
    $('input[name="partySize"]').blur(function() {
        $('#partyUp').css('border-top', '1px solid rgb(50, 50, 50)');
        $('#partyUp').css('border-right', '1px solid rgb(50, 50, 50)');
        $('#partyDown').css('border-bottom', '1px solid rgb(50, 50, 50)');
        $('#partyDown').css('border-right', '1px solid rgb(50, 50, 50)');
    });
});
