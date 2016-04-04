"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KnightoftheMists extends UnimplementedCard {
  constructor(game) {
    super(game, "Knight of the Mists", "Visions", "VIS");
  }
}

module.exports = KnightoftheMists;
