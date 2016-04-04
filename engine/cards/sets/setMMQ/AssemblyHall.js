"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AssemblyHall extends Card {
  constructor(game) {
    super(game, "Assembly Hall", "Mercadian Masques", "MMQ");
  }
}

module.exports = AssemblyHall;
