"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NirkanaRevenant extends UnimplementedCard {
  constructor (game) {
    super(game, "Nirkana Revenant", "Battlebond", "BBD");
  }
}

module.exports = NirkanaRevenant;
