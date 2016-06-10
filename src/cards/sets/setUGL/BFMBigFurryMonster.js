"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BFMBigFurryMonster extends UnimplementedCard {
  constructor (game) {
    super(game, "B.F.M. (Big Furry Monster)", "Unglued", "UGL");
  }
}

module.exports = BFMBigFurryMonster;
