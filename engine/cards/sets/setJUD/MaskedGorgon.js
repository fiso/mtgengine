"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MaskedGorgon extends UnimplementedCard {
  constructor(game) {
    super(game, "Masked Gorgon", "Judgment", "JUD");
  }
}

module.exports = MaskedGorgon;
