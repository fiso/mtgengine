"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Winnow extends Card {
  constructor(game) {
    super(game, "Winnow", "Invasion", "INV");
  }
}

module.exports = Winnow;
