"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HuntingPack extends UnimplementedCard {
  constructor (game) {
    super(game, "Hunting Pack", "Iconic Masters", "IMA");
  }
}

module.exports = HuntingPack;
