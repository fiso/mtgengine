"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Solarion extends Card {
  constructor(game) {
    super(game, "Solarion", "Fifth Dawn", "5DN");
  }
}

module.exports = Solarion;
