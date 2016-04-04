"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GrinningDemonAvatar extends UnimplementedCard {
  constructor(game) {
    super(game, "Grinning Demon Avatar", "Vanguard", "VAN");
  }
}

module.exports = GrinningDemonAvatar;
