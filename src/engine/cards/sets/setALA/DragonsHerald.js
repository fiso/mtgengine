"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DragonsHerald extends UnimplementedCard {
  constructor (game) {
    super(game, "Dragon's Herald", "Shards of Alara", "ALA");
  }
}

module.exports = DragonsHerald;
