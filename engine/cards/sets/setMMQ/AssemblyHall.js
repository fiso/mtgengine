"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AssemblyHall extends UnimplementedCard {
  constructor(game) {
    super(game, "Assembly Hall", "Mercadian Masques", "MMQ");
  }
}

module.exports = AssemblyHall;
