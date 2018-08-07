"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Harrow extends UnimplementedCard {
  constructor (game) {
    super(game, "Harrow", "Commander 2018", "C18");
  }
}

module.exports = Harrow;
