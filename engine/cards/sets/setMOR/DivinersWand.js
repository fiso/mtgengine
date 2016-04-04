"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DivinersWand extends Card {
  constructor(game) {
    super(game, "Diviner's Wand", "Morningtide", "MOR");
  }
}

module.exports = DivinersWand;
