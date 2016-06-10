"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Shunt extends UnimplementedCard {
  constructor (game) {
    super(game, "Shunt", "Darksteel", "DST");
  }
}

module.exports = Shunt;
