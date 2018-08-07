"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HazoretsMonument extends UnimplementedCard {
  constructor (game) {
    super(game, "Hazoret's Monument", "Amonkhet", "AKH");
  }
}

module.exports = HazoretsMonument;
