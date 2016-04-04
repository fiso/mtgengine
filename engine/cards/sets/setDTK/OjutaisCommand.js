"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class OjutaisCommand extends Card {
  constructor(game) {
    super(game, "Ojutai's Command", "Dragons of Tarkir", "DTK");
  }
}

module.exports = OjutaisCommand;
