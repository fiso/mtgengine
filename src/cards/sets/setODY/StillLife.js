"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StillLife extends UnimplementedCard {
  constructor(game) {
    super(game, "Still Life", "Odyssey", "ODY");
  }
}

module.exports = StillLife;
