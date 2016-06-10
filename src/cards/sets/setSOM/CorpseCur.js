"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CorpseCur extends UnimplementedCard {
  constructor (game) {
    super(game, "Corpse Cur", "Scars of Mirrodin", "SOM");
  }
}

module.exports = CorpseCur;
