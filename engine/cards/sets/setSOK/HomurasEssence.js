"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HomurasEssence extends Card {
  constructor(game) {
    super(game, "Homura's Essence", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = HomurasEssence;
