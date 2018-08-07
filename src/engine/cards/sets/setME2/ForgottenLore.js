"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ForgottenLore extends UnimplementedCard {
  constructor (game) {
    super(game, "Forgotten Lore", "Masters Edition II", "ME2");
  }
}

module.exports = ForgottenLore;
