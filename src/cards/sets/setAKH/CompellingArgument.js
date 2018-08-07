"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CompellingArgument extends UnimplementedCard {
  constructor (game) {
    super(game, "Compelling Argument", "Amonkhet", "AKH");
  }
}

module.exports = CompellingArgument;
