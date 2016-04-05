"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Vex extends UnimplementedCard {
  constructor(game) {
    super(game, "Vex", "Darksteel", "DST");
  }
}

module.exports = Vex;
