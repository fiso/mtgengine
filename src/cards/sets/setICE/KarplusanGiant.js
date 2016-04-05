"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KarplusanGiant extends UnimplementedCard {
  constructor(game) {
    super(game, "Karplusan Giant", "Ice Age", "ICE");
  }
}

module.exports = KarplusanGiant;
