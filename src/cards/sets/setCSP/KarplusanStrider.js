"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KarplusanStrider extends UnimplementedCard {
  constructor (game) {
    super(game, "Karplusan Strider", "Coldsnap", "CSP");
  }
}

module.exports = KarplusanStrider;
