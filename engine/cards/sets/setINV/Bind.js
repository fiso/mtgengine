"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Bind extends Card {
  constructor(game) {
    super(game, "Bind", "Invasion", "INV");
  }
}

module.exports = Bind;
