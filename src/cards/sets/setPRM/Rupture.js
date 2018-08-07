"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Rupture extends UnimplementedCard {
  constructor (game) {
    super(game, "Rupture", "Magic Online Promos", "PRM");
  }
}

module.exports = Rupture;
