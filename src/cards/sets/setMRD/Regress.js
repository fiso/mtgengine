"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Regress extends UnimplementedCard {
  constructor (game) {
    super(game, "Regress", "Mirrodin", "MRD");
  }
}

module.exports = Regress;
