"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MirritheCursedAvatar extends UnimplementedCard {
  constructor(game) {
    super(game, "Mirri the Cursed Avatar", "Vanguard", "VAN");
  }
}

module.exports = MirritheCursedAvatar;
