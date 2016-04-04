"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AtarkasCommand extends Card {
  constructor(game) {
    super(game, "Atarka's Command", "Dragons of Tarkir", "DTK");
  }
}

module.exports = AtarkasCommand;
