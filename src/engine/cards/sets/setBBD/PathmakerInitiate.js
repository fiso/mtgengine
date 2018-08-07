"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PathmakerInitiate extends UnimplementedCard {
  constructor (game) {
    super(game, "Pathmaker Initiate", "Battlebond", "BBD");
  }
}

module.exports = PathmakerInitiate;
