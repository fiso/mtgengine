"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SetAdrift extends UnimplementedCard {
  constructor(game) {
    super(game, "Set Adrift", "Khans of Tarkir", "KTK");
  }
}

module.exports = SetAdrift;
