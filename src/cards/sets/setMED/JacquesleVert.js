"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JacquesleVert extends UnimplementedCard {
  constructor (game) {
    super(game, "Jacques le Vert", "Masters Edition", "MED");
  }
}

module.exports = JacquesleVert;
