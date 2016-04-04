"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Opt extends Card {
  constructor(game) {
    super(game, "Opt", "Invasion", "INV");
  }
}

module.exports = Opt;
