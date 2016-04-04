"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Overwhelm extends Card {
  constructor(game) {
    super(game, "Overwhelm", "Magic 2015 Core Set", "M15");
  }
}

module.exports = Overwhelm;
