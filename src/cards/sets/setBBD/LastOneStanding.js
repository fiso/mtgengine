"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LastOneStanding extends UnimplementedCard {
  constructor (game) {
    super(game, "Last One Standing", "Battlebond", "BBD");
  }
}

module.exports = LastOneStanding;
