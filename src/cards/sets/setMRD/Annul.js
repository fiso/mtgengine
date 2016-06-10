"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Annul extends UnimplementedCard {
  constructor (game) {
    super(game, "Annul", "Mirrodin", "MRD");
  }
}

module.exports = Annul;
