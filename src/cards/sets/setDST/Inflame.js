"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Inflame extends UnimplementedCard {
  constructor (game) {
    super(game, "Inflame", "Darksteel", "DST");
  }
}

module.exports = Inflame;
