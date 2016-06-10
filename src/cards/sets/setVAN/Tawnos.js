"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Tawnos extends UnimplementedCard {
  constructor (game) {
    super(game, "Tawnos", "Vanguard", "VAN");
  }
}

module.exports = Tawnos;
