"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VeiledApparition extends Card {
  constructor(game) {
    super(game, "Veiled Apparition", "Urza's Saga", "USG");
  }
}

module.exports = VeiledApparition;
