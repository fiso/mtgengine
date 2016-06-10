"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PeacekeeperAvatar extends UnimplementedCard {
  constructor (game) {
    super(game, "Peacekeeper Avatar", "Vanguard", "VAN");
  }
}

module.exports = PeacekeeperAvatar;
