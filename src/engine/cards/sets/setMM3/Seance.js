"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Seance extends UnimplementedCard {
  constructor (game) {
    super(game, "Séance", "Modern Masters 2017", "MM3");
  }
}

module.exports = Seance;
