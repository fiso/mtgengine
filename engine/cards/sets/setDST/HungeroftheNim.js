"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HungeroftheNim extends UnimplementedCard {
  constructor(game) {
    super(game, "Hunger of the Nim", "Darksteel", "DST");
  }
}

module.exports = HungeroftheNim;
