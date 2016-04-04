"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AndraditeLeech extends Card {
  constructor(game) {
    super(game, "Andradite Leech", "Invasion", "INV");
  }
}

module.exports = AndraditeLeech;
