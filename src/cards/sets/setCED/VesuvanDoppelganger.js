"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VesuvanDoppelganger extends UnimplementedCard {
  constructor (game) {
    super(game, "Vesuvan Doppelganger", "Collector's Edition", "CED");
  }
}

module.exports = VesuvanDoppelganger;
