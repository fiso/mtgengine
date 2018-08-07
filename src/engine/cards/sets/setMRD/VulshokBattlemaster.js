"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VulshokBattlemaster extends UnimplementedCard {
  constructor (game) {
    super(game, "Vulshok Battlemaster", "Mirrodin", "MRD");
  }
}

module.exports = VulshokBattlemaster;
