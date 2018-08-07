"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RamosianRevivalist extends UnimplementedCard {
  constructor (game) {
    super(game, "Ramosian Revivalist", "Future Sight", "FUT");
  }
}

module.exports = RamosianRevivalist;
