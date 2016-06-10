"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AncestorsChosen extends UnimplementedCard {
  constructor (game) {
    super(game, "Ancestor's Chosen", "Judgment", "JUD");
  }
}

module.exports = AncestorsChosen;
