"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FogofGnats extends Card {
  constructor(game) {
    super(game, "Fog of Gnats", "Urza's Legacy", "ULG");
  }
}

module.exports = FogofGnats;
