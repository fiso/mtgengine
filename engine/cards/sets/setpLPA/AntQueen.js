"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AntQueen extends UnimplementedCard {
  constructor(game) {
    super(game, "Ant Queen", "Launch Parties", "pLPA");
  }
}

module.exports = AntQueen;
