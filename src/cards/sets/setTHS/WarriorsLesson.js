"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WarriorsLesson extends UnimplementedCard {
  constructor (game) {
    super(game, "Warriors' Lesson", "Theros", "THS");
  }
}

module.exports = WarriorsLesson;
