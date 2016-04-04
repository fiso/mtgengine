"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MartyrofAshes extends Card {
  constructor(game) {
    super(game, "Martyr of Ashes", "Coldsnap", "CSP");
  }
}

module.exports = MartyrofAshes;
