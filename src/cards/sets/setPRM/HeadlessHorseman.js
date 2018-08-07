"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HeadlessHorseman extends UnimplementedCard {
  constructor (game) {
    super(game, "Headless Horseman", "Magic Online Promos", "PRM");
  }
}

module.exports = HeadlessHorseman;
