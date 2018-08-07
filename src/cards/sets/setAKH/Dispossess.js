"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Dispossess extends UnimplementedCard {
  constructor (game) {
    super(game, "Dispossess", "Amonkhet", "AKH");
  }
}

module.exports = Dispossess;
