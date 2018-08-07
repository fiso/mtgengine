"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DiscipleoftheRing extends UnimplementedCard {
  constructor (game) {
    super(game, "Disciple of the Ring", "Magic Origins", "ORI");
  }
}

module.exports = DiscipleoftheRing;
