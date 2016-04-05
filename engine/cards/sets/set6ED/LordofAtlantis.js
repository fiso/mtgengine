"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LordofAtlantis extends UnimplementedCard {
  constructor(game) {
    super(game, "Lord of Atlantis", "Classic Sixth Edition", "6ED");
  }
}

module.exports = LordofAtlantis;
