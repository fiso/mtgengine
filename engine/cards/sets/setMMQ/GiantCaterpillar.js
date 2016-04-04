"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GiantCaterpillar extends UnimplementedCard {
  constructor(game) {
    super(game, "Giant Caterpillar", "Mercadian Masques", "MMQ");
  }
}

module.exports = GiantCaterpillar;
