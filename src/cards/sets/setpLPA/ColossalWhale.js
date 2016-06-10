"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ColossalWhale extends UnimplementedCard {
  constructor (game) {
    super(game, "Colossal Whale", "Launch Parties", "pLPA");
  }
}

module.exports = ColossalWhale;
