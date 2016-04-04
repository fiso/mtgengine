"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Inviolability extends Card {
  constructor(game) {
    super(game, "Inviolability", "Mercadian Masques", "MMQ");
  }
}

module.exports = Inviolability;
