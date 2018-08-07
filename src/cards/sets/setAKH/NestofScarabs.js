"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NestofScarabs extends UnimplementedCard {
  constructor (game) {
    super(game, "Nest of Scarabs", "Amonkhet", "AKH");
  }
}

module.exports = NestofScarabs;
