"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EatenbySpiders extends Card {
  constructor(game) {
    super(game, "Eaten by Spiders", "Avacyn Restored", "AVR");
  }
}

module.exports = EatenbySpiders;
