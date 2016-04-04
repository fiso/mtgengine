"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DragonsHerald extends Card {
  constructor(game) {
    super(game, "Dragon's Herald", "Shards of Alara", "ALA");
  }
}

module.exports = DragonsHerald;
