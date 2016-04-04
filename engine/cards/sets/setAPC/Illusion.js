"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Illusion extends Card {
  constructor(game) {
    super(game, "Illusion", "Apocalypse", "APC");
  }
}

module.exports = Illusion;
