"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Oracle extends UnimplementedCard {
  constructor (game) {
    super(game, "Oracle", "Vanguard", "VAN");
  }
}

module.exports = Oracle;
