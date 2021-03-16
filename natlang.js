    var quizGamePoints = 0;
    var k = 0;
    
    //questions used in the quiz
    var allQuestions = [{
        question: "Nisbiy so'z yordamida birikkan to'ldiruvchi ergash gapli qo'shma gap berilgan javobni belgilang",
        answers: ["A) Shuni bilingki, hech bir yangilik bexosiyat bo'lmaydi", "B) Unga kim yaxshi gapirsa, o'sha odam yaxshi bo'lib ko'rinadi", "C) Kim odamlarga yaxshilik qilsa, yaxshi inson deyishadi", "D) Kimning ko'ngli tog' bo'lsa, uning yo'li ham to'g'ri bo'ladi"],
        correctAnswer: "2"
    }, {
        question: "Qaysi gap ergashtiruvchi bog'lovchi yordamida qo'shma gap qismlari o'zaro bog'langan ergash gap bosh gapdan oldin keladi?",
        answers: ["A) Ko'makchili qurilmalar", "B) Qiyoslash bog'lovchilari", "C) Faqat sabab bog'lovchilari", "D) Shart ergashtiruvchi bog'lovchilari"],
        correctAnswer: "3"
    }, {
        question: "Bilingki, jim turib salomat bo'lish, gapirib malomatga qolishdan afzal. Ushbu gap ergashgan qo'shma gapning qaysi turiga mansub?",
        answers: ["A) Ega ergashgan qo'shma gap", "B) To'ldiruvchi ergashgan qo'shma gap", "C) Aniqlovchi ergashgan qo'shma gap", "D) Hol ergashgan qo'shma gap"],
        correctAnswer: "1"
    }, {
        question: "Imtihonlar yaqinlashib qoldi,tayyorgarlik avjida. Ushbu qo'shma gapning turini toping",
        answers: ["A) Ergashgan qo'shma gap", "B) Bog'lovchisiz qo'shma gap", "C) Bog'langan qo'shma gap", "D) Sodda gap"],
        correctAnswer: "1"
    }, {
        question: "Mehnat qilsang, o'qishga kirasan. Ushbu qo'shma gapning turini toping",
        answers: ["A) Bog'lovchisiz bog'langan gap", "B) Ega ergashgan qo'shma gap", "C)  Hol ergashgan qo'shma gap", "D) Aniqlovchi ergashgan qo'shma gap"],
        correctAnswer: "2"
    }, {
        question: "Eshik ochildi hamda ustoz kirib keldi. Ushbu qo'shma gapining turini aniqlang",
        answers: ["A) Bog'lovchisiz qo'shma gap", "B) Bog'langan qo'shma gap", "C) Hol ergashgan qo'shma gap", "D) Ega ergashgan qo'shma gap"],
        correctAnswer: "1"
    }, {
        question: "Kechasi qor yog'gan-u, havo unchalik salqin emas. Ushbu qo'shma gapning turini aniqlang",
        answers: ["A) Bog'lovchisiz qo'shma gap", "B) Bog'langan qo'shma gap", "C) Ergashgan qo'shma gap", "D) Sodda gap"],
        correctAnswer: "1"
    }, {
        question: "Qaysi javobda qo'shma gapning ergash gap qismida qo'llanadigan bog'lovchilar keltirilgan?",
        answers: ["A) Ammo, agar, chunki", "B) Negaki, balki, chunki", "C) Agar, chunki, begaki, mobodo", "D) Shuning uchun, bilan, hamda "],
        correctAnswer: "2"
    }, {
        question: "Shunday odamlar borki, vijdonini pulga sotadi. Qo'shma gap turini aniqlang.",
        answers: ["A) Ega ergash gap", "B) To'ldiruvchi ergash gap", "C) Aniqlovchi ergash gap", "D) Kesim ergash gap"],
        correctAnswer: "2"
    }, {
        question: "Soqchi, ota-onam borligiga ishonmadi shekilli, gapnin aylantiraverdi. Ushbu qo'shma gapning turini aniqlang.",
        answers: ["A) Ergashgan qo'shma gap ", "B) Bog'lovchisiz qo'shma gap", "C)Bog'langan qo'shma gap", "D) Murakkab qo'shma gap"],
        correctAnswer: "1"


    
    }];
    
    
    
    
    $("#quiz-game-btn").on("click", function () {
        $('#game').show("slow");
        createQuizBoard();
    
    });

    function createQuizBoard() {
        $('#game').html('<div id="question-game"></div><button id="questions-submit">Tekshirish<i class="fa fa-angle-right" aria-hidden="true"></i></button>');
    
        //create quiz questions based on the allQuestions object
        $.each(allQuestions, function (i) {
            $('#question-game').append('<h3>' + allQuestions[i].question + '</h3>');
            $.each(this.answers, function (j) {
                currentAnswer = allQuestions[i].answers[j];
                $('#question-game').append('<div class="radio"><input type="radio" value="' + j + '" name="answer' + i + '" id="ans' + k + '" /><label for="ans' + k + '" class="label">' + currentAnswer + '</label></div>');
                k++;
            });
    
        });
    
    
        $("#questions-submit").on("click", function () {
    
            $.each(allQuestions, function (i) {
    
                //if marked answer is same as the correct one increase number of points
                if ($("input[name='answer" + i + "']:checked").val() == allQuestions[i].correctAnswer) {
                    quizGamePoints++;
                }
            });
            createPointSummary();
    
        });
    
    
    }
    
    function createPointSummary() {
        document.getElementById("game").innerHTML = "";
        $('#game').append('<div id="gameSummaryBox"><p>Yig\'ilgan ochkolar: ' + quizGamePoints + '<p></div>');
    
        $("#gameSummaryBox").addClass("showPointsAnim");
        //reset quiz points so quiz can be taken again
        quizGamePoints = 0;
        setTimeout(() => {
            location.reload();
        }, 3000);
    
    }