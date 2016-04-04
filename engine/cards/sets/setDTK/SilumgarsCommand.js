"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SilumgarsCommand extends Card {
  constructor(game) {
    super(game, "Silumgar's Command", "Dragons of Tarkir", "DTK");
  }
}

module.exports = SilumgarsCommand;
