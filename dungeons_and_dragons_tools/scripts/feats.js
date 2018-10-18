$(window).ready(function(){
    //attempting to use ajax to pull info from csv
    //it worked, but it isn't perfect so I'll have to come back to it
    var feats;
    var feats2 = [];
    var feats3 = [];
    $.ajax({
        url: 'feats.csv',
        dataType: 'text',
        success: function(data) {
            feats = data.split(/\r?\n|\r/);
            console.log("success");
            parseData();
            displayData();
        },
        fail: function(error) {
            console.log("error");
            console.log(error);
        }
    })

    function parseData() {
        for (var i = 0; i < feats.length; i++) {
            feats2.push(feats[i].split(","));
        }
        for (var i = 1; i < (feats2.length - 1); i++) {
            for (var j = 0; j <feats2[i].length; j++){
                if (j === 0) {
                    feats3[(i-1)] = '{ "' + feats2[0][0] + '":';
                    feats3[(i-1)] = feats3[(i-1)] + '"' + feats2[i][0] + '", ';
                }
                else if (j === (feats2[i].length -1)) {
                    feats3[(i-1)] = feats3[(i-1)] + '"' + feats2[0][j] + '":';
                    feats3[(i-1)] = feats3[(i-1)] + '"' + feats2[i][j] + '"}';
                }
                else {
                    feats3[(i-1)] = feats3[(i-1)] + '"' + feats2[0][j] + '":';
                    feats3[(i-1)] = feats3[(i-1)] + '"' + feats2[i][j] + '", ';
                }
            }
        }
        for (var i = 0; i < feats3.length; i++) {
            feats3[i] = JSON.parse(feats3[i]);
        }
    }

    function displayData() {
        for (var i = 0; i < feats3.length; i++) {
            var html = `<div>
                            <h4>
                                <span class="turn">
                                    <i class="fas fa-angle-down"></i>
                                </span>
                                ${feats3[i].name}
                            </h4>
                            <section>
                            <p class="prereq">
                                Prerequisite ${feats3[i].prereq}
                            </p>
                                <p>
                                    ${feats3[i].p1}
                                    <ul>
            							<li>
                                        ${feats3[i].ul1}
                                        </li>
            							<li>
                                        ${feats3[i].ul2}
                                        </li>
            							<li>
                                        ${feats3[i].ul3}
                                        </li>
                                        <li>
                                        ${feats3[i].ul4}
                                        </li>
            						</ul>
                                </p>
                                <p>
                                    ${feats3[i].p2}
                                </p>
                                <p>
                                    ${feats3[i].p3}
                                </p>
                                <p>
                                    ${feats3[i].p4}
                                </p>
                                <p>
                                    ${feats3[i].p5}
                                </p>
                            </section>
                        </div>`
            $('.feats').append(html);
        }
        $('li:not(:contains("."))').hide();
        $('.prereq:not(:contains(\u2014))').hide();
    }
});
