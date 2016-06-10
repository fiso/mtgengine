"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Contagion extends UnimplementedCard {
  constructor (game) {
    super(game, "Contagion", "Alliances", "ALL");
  }
}

module.exports = Contagion;
