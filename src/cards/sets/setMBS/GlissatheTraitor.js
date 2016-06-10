"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GlissatheTraitor extends UnimplementedCard {
  constructor (game) {
    super(game, "Glissa, the Traitor", "Mirrodin Besieged", "MBS");
  }
}

module.exports = GlissatheTraitor;
