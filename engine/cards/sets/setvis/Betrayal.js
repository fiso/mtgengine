"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Betrayal extends Card {
  constructor(game) {
    super(game, "Betrayal", "Visions", "VIS");
  }
}

module.exports = Betrayal;
