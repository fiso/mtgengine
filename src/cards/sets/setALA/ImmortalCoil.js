"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ImmortalCoil extends UnimplementedCard {
  constructor (game) {
    super(game, "Immortal Coil", "Shards of Alara", "ALA");
  }
}

module.exports = ImmortalCoil;
