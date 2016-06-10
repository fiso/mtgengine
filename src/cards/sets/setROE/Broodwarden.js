"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Broodwarden extends UnimplementedCard {
  constructor (game) {
    super(game, "Broodwarden", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = Broodwarden;
