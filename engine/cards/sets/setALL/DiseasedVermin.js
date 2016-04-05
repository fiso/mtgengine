"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DiseasedVermin extends UnimplementedCard {
  constructor(game) {
    super(game, "Diseased Vermin", "Alliances", "ALL");
  }
}

module.exports = DiseasedVermin;
