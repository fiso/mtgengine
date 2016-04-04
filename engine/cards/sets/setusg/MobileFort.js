"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MobileFort extends Card {
  constructor(game) {
    super(game, "Mobile Fort", "Urza's Saga", "USG");
  }
}

module.exports = MobileFort;
