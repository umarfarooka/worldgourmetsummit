$(document).ready(function() {
    var datatopost = {};

    $("#gotosecondscreen").click(function() {
        $(".step1").hide();
        $(".step2").show();
    });

    $("#gotothirdscreen").click(function() {
        $(".step2").hide();
        $(".step3").show();
    });

    $("#gotofifthscreen").click(function() {
        $(".step4").hide();
        $(".step5").show();
    });

    $("#gotosevenscreen").click(function() {
        $(".step6").hide();
        $(".step7").show();
    });

    $("#gotoninethscreen").click(function() {
        $(".step8").hide();
        $(".step9").show();
    });


    $("#gotolastscreen").click(function() {
        $(".step9").hide();
        $(".step10").show();
    });

    $(".answer1").click(function() {
        datatopost.ans1 = $(this).attr("data-item");
        //Resturants ID Fetch
        res1 = $('#votRes1D').attr("data-item");
        res2 = $('#votRes2D').attr("data-item");
        max = 0;
        //Resturant 1
        //Question 1 Fetch
        count = $('#res1_q1_count').attr("data-item");
        total = $('#res1_q1_total_count').attr("data-item");

        //Question 1 calculation
        total++;
        (datatopost.ans1 == res1) && count++;
        max = count;

        //Question 1 Result Assignment
        $('#res1_q1_per,#r1_q1_per').html(((count / total) * 100).toFixed(2));
        $('#res1_q1_count,#r1_q1_count').html(count);
        $('#res1_q1_total_count,#r1_q1_total_count').html(total);

        //Resturant 2
        //Question 1 Fetch
        count = $('#res2_q1_count').attr("data-item");
        total = $('#res2_q1_total_count').attr("data-item");

        //Question 1 calculation
        total++;
        (datatopost.ans1 == res2) && count++;
        (count > max) && (max = count);

        //Question 1 Result Assignment
        $('#res2_q1_per,#r2_q1_per').html(((count / total) * 100).toFixed(2));
        $('#res2_q1_count,#r2_q1_count').html(count);
        $('#res2_q1_total_count,#r2_q1_total_count').html(total);

        //Question 1 Winner Result Assignment
        $('#max_q1_win').html('<span id="winner_count">' + max + '</span>/<span class="total_count">' + total + '</span> votes');


        $(".step3").hide();
        $(".step4").show();
    });

    $(".answer2").click(function() {
        datatopost.ans2 = $(this).attr("data-item");
        //Resturants ID Fetch
        res1 = $('#votRes1D').attr("data-item");
        res2 = $('#votRes2D').attr("data-item");
        max = 0;

        //Resturant 1
        //Question 2 Fetch
        count = $('#res1_q2_count').attr("data-item");
        total = $('#res1_q2_total_count').attr("data-item");

        //Question 2 calculation
        total++;
        (datatopost.ans2 == res1) && count++;
        max = count;

        //Question 2 Result Assignment
        $('#res1_q2_per,#r1_q2_per').html(((count / total) * 100).toFixed(2));
        $('#res1_q2_count,#r1_q2_count').html(count);
        $('#res1_q2_total_count,#r1_q2_total_count').html(total);

        //Resturant 2
        //Question 2 Fetch
        count = $('#res2_q2_count').attr("data-item");
        total = $('#res2_q2_total_count').attr("data-item");

        //Question 2 calculation
        total++;
        (datatopost.ans2 == res2) && count++;
        (count > max) && (max = count);

        //Question 2 Result Assignment
        $('#res2_q2_per,#r2_q2_per').html(((count / total) * 100).toFixed(2));
        $('#res2_q2_count,#r2_q2_count').html(count);
        $('#res2_q2_total_count,#r2_q2_total_count').html(total);

        //Question 2 Winner Result Assignment
        $('#max_q2_win').html('<span id="winner_count">' + max + '</span>/<span class="total_count">' + total + '</span> votes');

        $(".step5").hide();
        $(".step6").show();
    });

    $(".answer3").click(function() {
        datatopost.ans3 = $(this).attr("data-item");
        datatopost.votid = $("#vot_id").val();
    
        //Resturants ID Fetch
        res1 = $('#votRes1D').attr("data-item");
        res2 = $('#votRes2D').attr("data-item");
        max = 0;

        //Resturant 1
        //Question 3 Fetch
        count = $('#res1_q3_count').attr("data-item");
        total = $('#res1_q3_total_count').attr("data-item");

        //Question 3 calculation
        total++;
        (datatopost.ans3 == res1) && count++;
        max = count;

        //Question 3 Result Assignment
        $('#res1_q3_per,#r1_q3_per').html(((count / total) * 100).toFixed(2));
        $('#res1_q3_count,#r1_q3_count').html(count);
        $('#res1_q3_total_count,#r1_q3_total_count').html(total);

        //Resturant 2
        //Question 3 Fetch
        count = $('#res2_q3_count').attr("data-item");
        total = $('#res2_q3_total_count').attr("data-item");

        //Question 3 calculation
        (datatopost.ans3 == res2) && count++;
        (count > max) && (max = count);
        total++;


        //Question 3 Result Assignment
        $('#res2_q3_per,#r2_q3_per').html(((count / total) * 100).toFixed(2));
        $('#res2_q3_count,#r2_q3_count').html(count);
        $('#res2_q3_total_count,#r2_q3_total_count').html(total);

        //Question 3 Winner Result Assignment
        $('#max_q3_win').html('<span id="winner_count">' + max + '</span>/<span class="total_count">' + total + '</span> votes');

        //Winner result fetch
        $res1_score = $('#res1_score').attr('data-item');
        $score_count = $('#res1_score').attr('data-total');
        $res2_score = $('#res2_score').attr('data-item');
        $score_count++;
        $res1_diff=0;
        $res2_diff=0;
        if (datatopost.ans1 == res1 && datatopost.ans2 == res1 && datatopost.ans3 == res1) {
            $res1_score++;
           datatopost.diff3=res1;
           datatopost.diff0=res2;
        } else if ((datatopost.ans1 == res1 && datatopost.ans2 == res1) || (datatopost.ans1 == res1 && datatopost.ans3 == res1)) {
            $res1_score++;
            datatopost.diff1=res2;
          datatopost.diff2=res1;
        } else if ((datatopost.ans1 == res2 && datatopost.ans2 == res2) || (datatopost.ans1 == res2 && datatopost.ans3 == res2)) {
          datatopost.diff1=res1;
          datatopost.diff2=res2;
            $res2_score++;
           
        } else {
            $res2_score++;
            datatopost.diff3=res2;
            datatopost.diff0=res1;
        }
        ($res1_score >= ($score_count / 2)) ? $('#res1_score').html("1"): $('#res1_score').html("0");
        ($res2_score >= ($score_count / 2)) ? $('#res2_score').html("1"): $('#res2_score').html("0");
        if ($res1_score == $res2_score) {
            $('#final_score').html('DRAW');
        } else if ($res1_score > $res2_score) {
            $('#final_score').html($('#res1_score').attr('data-name'));
        } else {
            $('#final_score').html($('#res2_score').attr('data-name'));
        }

        $(".step7").hide();
        $(".step8").show();
        var diff=$res1_score-$res2_score;
        console.log("difference", diff);
        console.log($res1_score);
        console.log($res2_score);
        
        $.post("/wgs2020/main.php/polling", datatopost, function(e) {
            console.log(e);
        });

    });


});