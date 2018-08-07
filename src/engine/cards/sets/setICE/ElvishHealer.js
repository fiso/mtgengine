"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ElvishHealer extends UnimplementedCard {
  constructor (game) {
    super(game, "Elvish Healer", "Ice Age", "ICE");
  }
}

module.exports = ElvishHealer;
