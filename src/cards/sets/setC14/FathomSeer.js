"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FathomSeer extends UnimplementedCard {
  constructor(game) {
    super(game, "Fathom Seer", "Commander 2014", "C14");
  }
}

module.exports = FathomSeer;
