"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SoulEcho extends UnimplementedCard {
  constructor(game) {
    super(game, "Soul Echo", "Mirage", "MIR");
  }
}

module.exports = SoulEcho;
