"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Preordain extends UnimplementedCard {
  constructor (game) {
    super(game, "Preordain", "Commander 2015", "C15");
  }
}

module.exports = Preordain;
