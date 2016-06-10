"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Harrow extends UnimplementedCard {
  constructor (game) {
    super(game, "Harrow", "Commander 2014", "C14");
  }
}

module.exports = Harrow;
