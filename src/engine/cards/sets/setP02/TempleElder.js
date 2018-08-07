"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TempleElder extends UnimplementedCard {
  constructor (game) {
    super(game, "Temple Elder", "Portal Second Age", "P02");
  }
}

module.exports = TempleElder;
