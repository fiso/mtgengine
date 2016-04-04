"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MeletisCharlatan extends Card {
  constructor(game) {
    super(game, "Meletis Charlatan", "Theros", "THS");
  }
}

module.exports = MeletisCharlatan;
