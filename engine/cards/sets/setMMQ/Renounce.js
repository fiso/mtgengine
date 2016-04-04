"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Renounce extends Card {
  constructor(game) {
    super(game, "Renounce", "Mercadian Masques", "MMQ");
  }
}

module.exports = Renounce;
