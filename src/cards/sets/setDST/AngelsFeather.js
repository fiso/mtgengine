"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AngelsFeather extends UnimplementedCard {
  constructor (game) {
    super(game, "Angel's Feather", "Darksteel", "DST");
  }
}

module.exports = AngelsFeather;
