"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MaroAvatar extends UnimplementedCard {
  constructor(game) {
    super(game, "Maro Avatar", "Vanguard", "VAN");
  }
}

module.exports = MaroAvatar;
