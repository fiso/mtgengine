"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UndercityPlague extends UnimplementedCard {
  constructor (game) {
    super(game, "Undercity Plague", "Gatecrash", "GTC");
  }
}

module.exports = UndercityPlague;
