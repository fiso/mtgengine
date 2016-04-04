"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Thermopod extends UnimplementedCard {
  constructor(game) {
    super(game, "Thermopod", "Coldsnap", "CSP");
  }
}

module.exports = Thermopod;
