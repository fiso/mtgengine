"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Oracle extends UnimplementedCard {
  constructor (game) {
    super(game, "Oracle", "Vanguard Series", "PVAN");
  }
}

module.exports = Oracle;
