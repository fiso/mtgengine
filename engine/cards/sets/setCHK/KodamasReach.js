"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KodamasReach extends Card {
  constructor(game) {
    super(game, "Kodama's Reach", "Champions of Kamigawa", "CHK");
  }
}

module.exports = KodamasReach;
