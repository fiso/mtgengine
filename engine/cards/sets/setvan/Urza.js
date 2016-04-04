"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Urza extends Card {
  constructor(game) {
    super(game, "Urza", "Vanguard", "VAN");
  }
}

module.exports = Urza;
