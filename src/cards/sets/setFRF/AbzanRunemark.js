"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AbzanRunemark extends UnimplementedCard {
  constructor (game) {
    super(game, "Abzan Runemark", "Fate Reforged", "FRF");
  }
}

module.exports = AbzanRunemark;
