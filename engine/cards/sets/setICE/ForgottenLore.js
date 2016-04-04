"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ForgottenLore extends UnimplementedCard {
  constructor(game) {
    super(game, "Forgotten Lore", "Ice Age", "ICE");
  }
}

module.exports = ForgottenLore;
