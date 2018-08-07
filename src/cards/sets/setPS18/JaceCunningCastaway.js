"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JaceCunningCastaway extends UnimplementedCard {
  constructor (game) {
    super(game, "Jace, Cunning Castaway", "San Diego Comic-Con 2018", "PS18");
  }
}

module.exports = JaceCunningCastaway;
