"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BrassclawOrcs extends UnimplementedCard {
  constructor (game) {
    super(game, "Brassclaw Orcs", "Fallen Empires", "FEM");
  }
}

module.exports = BrassclawOrcs;
