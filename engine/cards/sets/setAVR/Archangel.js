"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Archangel extends Card {
  constructor(game) {
    super(game, "Archangel", "Avacyn Restored", "AVR");
  }
}

module.exports = Archangel;
