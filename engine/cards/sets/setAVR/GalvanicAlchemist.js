"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GalvanicAlchemist extends Card {
  constructor(game) {
    super(game, "Galvanic Alchemist", "Avacyn Restored", "AVR");
  }
}

module.exports = GalvanicAlchemist;
