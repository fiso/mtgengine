"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Domineer extends UnimplementedCard {
  constructor (game) {
    super(game, "Domineer", "Mirrodin", "MRD");
  }
}

module.exports = Domineer;
