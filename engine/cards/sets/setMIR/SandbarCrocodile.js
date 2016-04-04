"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SandbarCrocodile extends UnimplementedCard {
  constructor(game) {
    super(game, "Sandbar Crocodile", "Mirage", "MIR");
  }
}

module.exports = SandbarCrocodile;
