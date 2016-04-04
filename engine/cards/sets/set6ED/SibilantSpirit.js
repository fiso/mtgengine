"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SibilantSpirit extends UnimplementedCard {
  constructor(game) {
    super(game, "Sibilant Spirit", "Classic Sixth Edition", "6ED");
  }
}

module.exports = SibilantSpirit;
