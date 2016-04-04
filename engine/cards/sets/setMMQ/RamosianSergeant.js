"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RamosianSergeant extends Card {
  constructor(game) {
    super(game, "Ramosian Sergeant", "Mercadian Masques", "MMQ");
  }
}

module.exports = RamosianSergeant;
