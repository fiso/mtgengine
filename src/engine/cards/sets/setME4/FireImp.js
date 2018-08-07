"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FireImp extends UnimplementedCard {
  constructor (game) {
    super(game, "Fire Imp", "Masters Edition IV", "ME4");
  }
}

module.exports = FireImp;
