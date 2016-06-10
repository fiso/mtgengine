"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BoshIronGolemAvatar extends UnimplementedCard {
  constructor (game) {
    super(game, "Bosh, Iron Golem Avatar", "Vanguard", "VAN");
  }
}

module.exports = BoshIronGolemAvatar;
