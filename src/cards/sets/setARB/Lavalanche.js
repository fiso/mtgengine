"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Lavalanche extends UnimplementedCard {
  constructor (game) {
    super(game, "Lavalanche", "Alara Reborn", "ARB");
  }
}

module.exports = Lavalanche;
