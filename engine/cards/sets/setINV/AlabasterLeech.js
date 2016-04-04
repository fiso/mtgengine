"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AlabasterLeech extends Card {
  constructor(game) {
    super(game, "Alabaster Leech", "Invasion", "INV");
  }
}

module.exports = AlabasterLeech;
