"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WitchesEye extends Card {
  constructor(game) {
    super(game, "Witches' Eye", "Theros", "THS");
  }
}

module.exports = WitchesEye;
