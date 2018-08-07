"use strict";
const Constants = require ("../../../Constants");
const PresstheAdvantageBase = require("../setE01/PresstheAdvantage");

class PresstheAdvantage extends PresstheAdvantageBase {
  constructor (game) {
    super(game, "Press the Advantage", "Dragons of Tarkir", "DTK");
  }
}

module.exports = PresstheAdvantage;
