"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Brainstorm extends Card {
  constructor(game) {
    super(game, "Brainstorm", "Beatdown Box Set", "BTD");
  }
}

module.exports = Brainstorm;
