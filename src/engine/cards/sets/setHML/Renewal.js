"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Renewal extends UnimplementedCard {
  constructor (game) {
    super(game, "Renewal", "Homelands", "HML");
  }
}

module.exports = Renewal;
