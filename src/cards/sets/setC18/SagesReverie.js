"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SagesReverie extends UnimplementedCard {
  constructor (game) {
    super(game, "Sage's Reverie", "Commander 2018", "C18");
  }
}

module.exports = SagesReverie;
