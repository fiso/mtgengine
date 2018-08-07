"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Stun extends UnimplementedCard {
  constructor (game) {
    super(game, "Stun", "Tempest Remastered", "TPR");
  }
}

module.exports = Stun;
