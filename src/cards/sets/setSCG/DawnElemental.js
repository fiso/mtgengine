"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DawnElemental extends UnimplementedCard {
  constructor(game) {
    super(game, "Dawn Elemental", "Scourge", "SCG");
  }
}

module.exports = DawnElemental;
