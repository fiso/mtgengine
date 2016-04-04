"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SkullofRamos extends Card {
  constructor(game) {
    super(game, "Skull of Ramos", "Mercadian Masques", "MMQ");
  }
}

module.exports = SkullofRamos;
