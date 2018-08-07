"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ScrollRack extends UnimplementedCard {
  constructor (game) {
    super(game, "Scroll Rack", "Kaladesh Inventions", "MPS");
  }
}

module.exports = ScrollRack;
