"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Groundskeeper extends UnimplementedCard {
  constructor (game) {
    super(game, "Groundskeeper", "Mercadian Masques", "MMQ");
  }
}

module.exports = Groundskeeper;
