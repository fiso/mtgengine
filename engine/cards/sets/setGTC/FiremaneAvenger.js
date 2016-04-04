"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FiremaneAvenger extends Card {
  constructor(game) {
    super(game, "Firemane Avenger", "Gatecrash", "GTC");
  }
}

module.exports = FiremaneAvenger;
