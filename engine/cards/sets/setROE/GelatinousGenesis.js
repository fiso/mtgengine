"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GelatinousGenesis extends Card {
  constructor(game) {
    super(game, "Gelatinous Genesis", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = GelatinousGenesis;
