"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Mutavault extends UnimplementedCard {
  constructor(game) {
    super(game, "Mutavault", "Champs and States", "pCMP");
  }
}

module.exports = Mutavault;
