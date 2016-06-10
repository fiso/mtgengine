"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KederektCreeper extends UnimplementedCard {
  constructor (game) {
    super(game, "Kederekt Creeper", "Shards of Alara", "ALA");
  }
}

module.exports = KederektCreeper;
