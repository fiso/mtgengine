"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MistveinBorderpost extends UnimplementedCard {
  constructor(game) {
    super(game, "Mistvein Borderpost", "Alara Reborn", "ARB");
  }
}

module.exports = MistveinBorderpost;
