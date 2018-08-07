"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ColossalWhale extends UnimplementedCard {
  constructor (game) {
    super(game, "Colossal Whale", "Magic 2014", "M14");
  }
}

module.exports = ColossalWhale;
