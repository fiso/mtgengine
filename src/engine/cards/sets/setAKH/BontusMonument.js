"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BontusMonument extends UnimplementedCard {
  constructor (game) {
    super(game, "Bontu's Monument", "Amonkhet", "AKH");
  }
}

module.exports = BontusMonument;
