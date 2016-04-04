"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AkkiRaider extends Card {
  constructor(game) {
    super(game, "Akki Raider", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = AkkiRaider;
