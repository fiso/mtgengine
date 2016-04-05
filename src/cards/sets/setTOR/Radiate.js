"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Radiate extends UnimplementedCard {
  constructor(game) {
    super(game, "Radiate", "Torment", "TOR");
  }
}

module.exports = Radiate;
