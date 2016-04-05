"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HighlandGiant extends UnimplementedCard {
  constructor(game) {
    super(game, "Highland Giant", "Portal", "POR");
  }
}

module.exports = HighlandGiant;
