"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ForcemageAdvocate extends UnimplementedCard {
  constructor (game) {
    super(game, "Forcemage Advocate", "Judgment", "JUD");
  }
}

module.exports = ForcemageAdvocate;
