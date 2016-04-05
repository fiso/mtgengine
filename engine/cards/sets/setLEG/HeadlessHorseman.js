"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HeadlessHorseman extends UnimplementedCard {
  constructor(game) {
    super(game, "Headless Horseman", "Legends", "LEG");
  }
}

module.exports = HeadlessHorseman;
