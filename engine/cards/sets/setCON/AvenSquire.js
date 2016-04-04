"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AvenSquire extends Card {
  constructor(game) {
    super(game, "Aven Squire", "Conflux", "CON");
  }
}

module.exports = AvenSquire;
