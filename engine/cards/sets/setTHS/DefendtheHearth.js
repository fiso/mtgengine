"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DefendtheHearth extends Card {
  constructor(game) {
    super(game, "Defend the Hearth", "Theros", "THS");
  }
}

module.exports = DefendtheHearth;
