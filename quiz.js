var quiz = {
        user: "Dave",
        questions: [
            {
                text: "What is Heart Failure (HF)?",
                responses: [
                    { text: "Common diseases" },
                    { text: "Clinical syndrome", correct: true },
                    { text: "Outweighing" },
                    { text: "Heart defects" }] },


            {
                text: "Which of these is a cause of heart disease?",
                responses: [
                    { text: "Thickening of the inside of the arteries", correct: true },
                    { text: "Stroke" },
                    { text: "Arthritis" },
                    { text: "None of the above" }] },


            {
                text: "What is considered \"high blood pressure\"?",
                responses: [
                    { text: "90/70" },
                    { text: "100/80" },
                    { text: "130/80" },
                    { text: "140/90" },
                    { text: "c and d", correct: true } ] },


            {
                text: "Why can smoking lead to heart disease?",
                responses: [
                    { text: "It causes the arteries to harden and thicken" },
                    { text: "It reduces HDL (\"good\") cholesterol" },
                    { text: "It raises blood pressure" },
                    { text: "All of the above", correct: true }] }] },




    userResponseSkelaton = Array(quiz.questions.length).fill(null);

var app = new Vue({
    el: "#app",
    data: {
        quiz: quiz,
        questionIndex: 0,
        userResponses: userResponseSkelaton,
        isActive: false },

    filters: {
        charIndex: function (i) {
            return String.fromCharCode(97 + i);
        } },

    methods: {
        restart: function () {
            this.questionIndex = 0;
            this.userResponses = Array(this.quiz.questions.length).fill(null);
        },
        selectOption: function (index) {
            Vue.set(this.userResponses, this.questionIndex, index);
            //console.log(this.userResponses);
        },
        next: function () {
            if (this.questionIndex < this.quiz.questions.length)
                this.questionIndex++;
        },

        prev: function () {
            if (this.quiz.questions.length > 0) this.questionIndex--;
        },
        // Return "true" count in userResponses
        score: function () {
            var score = 0;
            for (let i = 0; i < this.userResponses.length; i++) {
                if (
                    typeof this.quiz.questions[i].responses[
                        this.userResponses[i]] !==
                    "undefined" &&
                    this.quiz.questions[i].responses[this.userResponses[i]].correct)
                {
                    score = score + 1;
                }
            }
            return score;

            //return this.userResponses.filter(function(val) { return val }).length;
        } } });