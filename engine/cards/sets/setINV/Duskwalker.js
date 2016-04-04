"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Duskwalker extends Card {
  constructor(game) {
    super(game, "Duskwalker", "Invasion", "INV");
  }
}

module.exports = Duskwalker;
