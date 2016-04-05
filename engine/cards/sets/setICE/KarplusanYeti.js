"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KarplusanYeti extends UnimplementedCard {
  constructor(game) {
    super(game, "Karplusan Yeti", "Ice Age", "ICE");
  }
}

module.exports = KarplusanYeti;
