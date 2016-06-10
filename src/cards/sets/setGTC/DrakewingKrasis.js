"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DrakewingKrasis extends UnimplementedCard {
  constructor (game) {
    super(game, "Drakewing Krasis", "Gatecrash", "GTC");
  }
}

module.exports = DrakewingKrasis;
