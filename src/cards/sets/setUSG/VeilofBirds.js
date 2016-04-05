"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VeilofBirds extends UnimplementedCard {
  constructor(game) {
    super(game, "Veil of Birds", "Urza's Saga", "USG");
  }
}

module.exports = VeilofBirds;
