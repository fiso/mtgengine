"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Vendetta extends UnimplementedCard {
  constructor (game) {
    super(game, "Vendetta", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = Vendetta;
