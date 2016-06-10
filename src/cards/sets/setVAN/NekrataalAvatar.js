"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NekrataalAvatar extends UnimplementedCard {
  constructor (game) {
    super(game, "Nekrataal Avatar", "Vanguard", "VAN");
  }
}

module.exports = NekrataalAvatar;
