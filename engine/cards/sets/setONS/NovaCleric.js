"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NovaCleric extends Card {
  constructor(game) {
    super(game, "Nova Cleric", "Onslaught", "ONS");
  }
}

module.exports = NovaCleric;
