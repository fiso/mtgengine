"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IllusionReality extends UnimplementedCard {
  constructor (game) {
    super(game, "Illusion // Reality", "Apocalypse", "APC");
  }
}

module.exports = IllusionReality;
