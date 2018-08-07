"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KarplusanGiant extends UnimplementedCard {
  constructor (game) {
    super(game, "Karplusan Giant", "Masters Edition II", "ME2");
  }
}

module.exports = KarplusanGiant;
