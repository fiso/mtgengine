"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LostOrderofJarkeld extends UnimplementedCard {
  constructor (game) {
    super(game, "Lost Order of Jarkeld", "Ice Age", "ICE");
  }
}

module.exports = LostOrderofJarkeld;
