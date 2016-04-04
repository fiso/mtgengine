"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Sliversmith extends Card {
  constructor(game) {
    super(game, "Sliversmith", "Future Sight", "FUT");
  }
}

module.exports = Sliversmith;
