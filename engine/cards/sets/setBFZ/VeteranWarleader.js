"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VeteranWarleader extends Card {
  constructor(game) {
    super(game, "Veteran Warleader", "Battle for Zendikar", "BFZ");
  }
}

module.exports = VeteranWarleader;
