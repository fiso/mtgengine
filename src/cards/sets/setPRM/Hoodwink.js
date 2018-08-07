"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Hoodwink extends UnimplementedCard {
  constructor (game) {
    super(game, "Hoodwink", "Magic Online Promos", "PRM");
  }
}

module.exports = Hoodwink;
