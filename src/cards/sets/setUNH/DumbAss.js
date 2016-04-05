"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DumbAss extends UnimplementedCard {
  constructor(game) {
    super(game, "Dumb Ass", "Unhinged", "UNH");
  }
}

module.exports = DumbAss;
