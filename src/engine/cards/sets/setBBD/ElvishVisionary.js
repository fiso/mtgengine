"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ElvishVisionary extends UnimplementedCard {
  constructor (game) {
    super(game, "Elvish Visionary", "Battlebond", "BBD");
  }
}

module.exports = ElvishVisionary;
