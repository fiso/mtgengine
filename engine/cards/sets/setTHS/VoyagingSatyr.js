"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VoyagingSatyr extends Card {
  constructor(game) {
    super(game, "Voyaging Satyr", "Theros", "THS");
  }
}

module.exports = VoyagingSatyr;
