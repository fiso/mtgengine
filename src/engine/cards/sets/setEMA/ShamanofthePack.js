"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShamanofthePack extends UnimplementedCard {
  constructor (game) {
    super(game, "Shaman of the Pack", "Eternal Masters", "EMA");
  }
}

module.exports = ShamanofthePack;
