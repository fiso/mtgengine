"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GrimclawBats extends UnimplementedCard {
  constructor(game) {
    super(game, "Grimclaw Bats", "Darksteel", "DST");
  }
}

module.exports = GrimclawBats;
