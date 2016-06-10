"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CompulsiveResearch extends UnimplementedCard {
  constructor (game) {
    super(game, "Compulsive Research", "Commander 2014", "C14");
  }
}

module.exports = CompulsiveResearch;
