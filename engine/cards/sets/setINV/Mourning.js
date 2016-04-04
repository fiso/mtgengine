"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Mourning extends Card {
  constructor(game) {
    super(game, "Mourning", "Invasion", "INV");
  }
}

module.exports = Mourning;
