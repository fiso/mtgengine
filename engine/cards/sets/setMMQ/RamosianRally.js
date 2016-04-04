"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RamosianRally extends Card {
  constructor(game) {
    super(game, "Ramosian Rally", "Mercadian Masques", "MMQ");
  }
}

module.exports = RamosianRally;
