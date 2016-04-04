"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RuinousPath extends Card {
  constructor(game) {
    super(game, "Ruinous Path", "Battle for Zendikar", "BFZ");
  }
}

module.exports = RuinousPath;
