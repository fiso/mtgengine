"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WarriorsLesson extends Card {
  constructor(game) {
    super(game, "Warriors' Lesson", "Theros", "THS");
  }
}

module.exports = WarriorsLesson;
