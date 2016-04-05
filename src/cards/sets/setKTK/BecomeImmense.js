"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BecomeImmense extends UnimplementedCard {
  constructor(game) {
    super(game, "Become Immense", "Khans of Tarkir", "KTK");
  }
}

module.exports = BecomeImmense;
