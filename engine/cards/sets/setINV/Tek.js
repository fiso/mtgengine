"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Tek extends Card {
  constructor(game) {
    super(game, "Tek", "Invasion", "INV");
  }
}

module.exports = Tek;
