"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Opt extends UnimplementedCard {
  constructor (game) {
    super(game, "Opt", "Invasion", "INV");
  }
}

module.exports = Opt;
