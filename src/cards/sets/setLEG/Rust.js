"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Rust extends UnimplementedCard {
  constructor (game) {
    super(game, "Rust", "Legends", "LEG");
  }
}

module.exports = Rust;
