"use strict";
const Constants = require ("../../../Constants");
const PainfulLessonBase = require("../setBBD/PainfulLesson");

class PainfulLesson extends PainfulLessonBase {
  constructor (game) {
    super(game, "Painful Lesson", "Amonkhet", "AKH");
  }
}

module.exports = PainfulLesson;
