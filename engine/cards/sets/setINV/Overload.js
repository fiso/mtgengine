"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Overload extends Card {
  constructor(game) {
    super(game, "Overload", "Invasion", "INV");
  }
}

module.exports = Overload;
