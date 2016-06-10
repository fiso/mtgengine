"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PermafrostTrap extends UnimplementedCard {
  constructor (game) {
    super(game, "Permafrost Trap", "Worldwake", "WWK");
  }
}

module.exports = PermafrostTrap;
