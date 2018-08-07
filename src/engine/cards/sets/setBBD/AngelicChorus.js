"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AngelicChorus extends UnimplementedCard {
  constructor (game) {
    super(game, "Angelic Chorus", "Battlebond", "BBD");
  }
}

module.exports = AngelicChorus;
