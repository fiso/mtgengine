"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RefractionTrap extends UnimplementedCard {
  constructor(game) {
    super(game, "Refraction Trap", "Worldwake", "WWK");
  }
}

module.exports = RefractionTrap;
