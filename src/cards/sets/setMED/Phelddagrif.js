"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Phelddagrif extends UnimplementedCard {
  constructor (game) {
    super(game, "Phelddagrif", "Masters Edition", "MED");
  }
}

module.exports = Phelddagrif;
