"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EnchantersBane extends UnimplementedCard {
  constructor (game) {
    super(game, "Enchanter's Bane", "Commander 2018", "C18");
  }
}

module.exports = EnchantersBane;
