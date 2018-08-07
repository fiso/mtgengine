"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Eladamri extends UnimplementedCard {
  constructor (game) {
    super(game, "Eladamri", "Vanguard Series", "PVAN");
  }
}

module.exports = Eladamri;
