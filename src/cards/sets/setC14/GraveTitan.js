"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GraveTitan extends UnimplementedCard {
  constructor (game) {
    super(game, "Grave Titan", "Commander 2014", "C14");
  }
}

module.exports = GraveTitan;
