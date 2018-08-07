"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PainfulLesson extends UnimplementedCard {
  constructor (game) {
    super(game, "Painful Lesson", "Battlebond", "BBD");
  }
}

module.exports = PainfulLesson;
