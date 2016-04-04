"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WrathofGod extends Card {
  constructor(game) {
    super(game, "Wrath of God", "Battle Royale Box Set", "BRB");
  }
}

module.exports = WrathofGod;
