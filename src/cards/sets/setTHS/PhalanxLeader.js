"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PhalanxLeader extends UnimplementedCard {
  constructor (game) {
    super(game, "Phalanx Leader", "Theros", "THS");
  }
}

module.exports = PhalanxLeader;
