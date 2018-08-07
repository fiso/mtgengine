"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CapriciousEfreet extends UnimplementedCard {
  constructor (game) {
    super(game, "Capricious Efreet", "Commander 2013", "C13");
  }
}

module.exports = CapriciousEfreet;
