"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Oxidize extends UnimplementedCard {
  constructor (game) {
    super(game, "Oxidize", "Darksteel", "DST");
  }
}

module.exports = Oxidize;
