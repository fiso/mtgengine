"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Icequake extends UnimplementedCard {
  constructor (game) {
    super(game, "Icequake", "Ice Age", "ICE");
  }
}

module.exports = Icequake;
