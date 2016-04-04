"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SidisisPet extends UnimplementedCard {
  constructor(game) {
    super(game, "Sidisi's Pet", "Khans of Tarkir", "KTK");
  }
}

module.exports = SidisisPet;
