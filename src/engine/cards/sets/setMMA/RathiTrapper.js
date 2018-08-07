"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RathiTrapper extends UnimplementedCard {
  constructor (game) {
    super(game, "Rathi Trapper", "Modern Masters", "MMA");
  }
}

module.exports = RathiTrapper;
