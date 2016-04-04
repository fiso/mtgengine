"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VengefulVampire extends UnimplementedCard {
  constructor(game) {
    super(game, "Vengeful Vampire", "Dark Ascension", "DKA");
  }
}

module.exports = VengefulVampire;
