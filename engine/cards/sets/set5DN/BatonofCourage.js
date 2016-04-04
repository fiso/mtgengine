"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BatonofCourage extends Card {
  constructor(game) {
    super(game, "Baton of Courage", "Fifth Dawn", "5DN");
  }
}

module.exports = BatonofCourage;
