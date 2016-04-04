"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Cryoclasm extends Card {
  constructor(game) {
    super(game, "Cryoclasm", "Coldsnap", "CSP");
  }
}

module.exports = Cryoclasm;
