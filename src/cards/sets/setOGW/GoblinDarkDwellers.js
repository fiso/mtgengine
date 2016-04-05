"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinDarkDwellers extends UnimplementedCard {
  constructor(game) {
    super(game, "Goblin Dark-Dwellers", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = GoblinDarkDwellers;
