"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Rust extends Card {
  constructor(game) {
    super(game, "Rust", "Legends", "LEG");
  }
}

module.exports = Rust;
