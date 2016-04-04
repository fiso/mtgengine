"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Charisma extends Card {
  constructor(game) {
    super(game, "Charisma", "Mercadian Masques", "MMQ");
  }
}

module.exports = Charisma;
