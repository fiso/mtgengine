"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SelflessExorcist extends UnimplementedCard {
  constructor (game) {
    super(game, "Selfless Exorcist", "Judgment", "JUD");
  }
}

module.exports = SelflessExorcist;
