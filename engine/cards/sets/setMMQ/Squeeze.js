"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Squeeze extends Card {
  constructor(game) {
    super(game, "Squeeze", "Mercadian Masques", "MMQ");
  }
}

module.exports = Squeeze;
