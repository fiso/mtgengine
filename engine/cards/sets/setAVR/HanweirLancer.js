"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HanweirLancer extends Card {
  constructor(game) {
    super(game, "Hanweir Lancer", "Avacyn Restored", "AVR");
  }
}

module.exports = HanweirLancer;
