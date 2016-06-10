"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Winnow extends UnimplementedCard {
  constructor (game) {
    super(game, "Winnow", "Invasion", "INV");
  }
}

module.exports = Winnow;
