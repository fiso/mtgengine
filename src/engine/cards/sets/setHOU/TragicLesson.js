"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TragicLesson extends UnimplementedCard {
  constructor (game) {
    super(game, "Tragic Lesson", "Hour of Devastation", "HOU");
  }
}

module.exports = TragicLesson;
