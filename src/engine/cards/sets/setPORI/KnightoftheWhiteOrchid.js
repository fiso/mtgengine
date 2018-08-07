"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KnightoftheWhiteOrchid extends UnimplementedCard {
  constructor (game) {
    super(game, "Knight of the White Orchid", "Magic Origins Promos", "PORI");
  }
}

module.exports = KnightoftheWhiteOrchid;
