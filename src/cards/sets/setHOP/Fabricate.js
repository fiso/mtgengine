"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Fabricate extends UnimplementedCard {
  constructor (game) {
    super(game, "Fabricate", "Planechase", "HOP");
  }
}

module.exports = Fabricate;
