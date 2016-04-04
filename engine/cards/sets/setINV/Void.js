"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Void extends Card {
  constructor(game) {
    super(game, "Void", "Invasion", "INV");
  }
}

module.exports = Void;
