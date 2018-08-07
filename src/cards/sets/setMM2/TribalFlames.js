"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TribalFlames extends UnimplementedCard {
  constructor (game) {
    super(game, "Tribal Flames", "Modern Masters 2015", "MM2");
  }
}

module.exports = TribalFlames;
