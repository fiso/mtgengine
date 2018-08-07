"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RicochetTrap extends UnimplementedCard {
  constructor (game) {
    super(game, "Ricochet Trap", "Worldwake", "WWK");
  }
}

module.exports = RicochetTrap;
