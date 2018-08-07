"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Mirari extends UnimplementedCard {
  constructor (game) {
    super(game, "Mirari", "Commander 2013", "C13");
  }
}

module.exports = Mirari;
