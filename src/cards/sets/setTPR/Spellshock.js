"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Spellshock extends UnimplementedCard {
  constructor (game) {
    super(game, "Spellshock", "Tempest Remastered", "TPR");
  }
}

module.exports = Spellshock;
