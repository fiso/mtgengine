"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Overload extends UnimplementedCard {
  constructor (game) {
    super(game, "Overload", "Invasion", "INV");
  }
}

module.exports = Overload;
