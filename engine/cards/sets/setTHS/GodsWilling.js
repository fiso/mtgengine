"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GodsWilling extends Card {
  constructor(game) {
    super(game, "Gods Willing", "Theros", "THS");
  }
}

module.exports = GodsWilling;
