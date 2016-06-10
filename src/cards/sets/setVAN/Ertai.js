"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Ertai extends UnimplementedCard {
  constructor (game) {
    super(game, "Ertai", "Vanguard", "VAN");
  }
}

module.exports = Ertai;
