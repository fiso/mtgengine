"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StuffyDollAvatar extends UnimplementedCard {
  constructor (game) {
    super(game, "Stuffy Doll Avatar", "Vanguard", "VAN");
  }
}

module.exports = StuffyDollAvatar;
