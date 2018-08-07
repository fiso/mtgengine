"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GrenzosRuffians extends UnimplementedCard {
  constructor (game) {
    super(game, "Grenzo's Ruffians", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = GrenzosRuffians;
