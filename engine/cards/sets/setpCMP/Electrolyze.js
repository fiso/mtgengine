"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Electrolyze extends UnimplementedCard {
  constructor(game) {
    super(game, "Electrolyze", "Champs and States", "pCMP");
  }
}

module.exports = Electrolyze;
