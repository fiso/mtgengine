"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MarduRoughrider extends UnimplementedCard {
  constructor(game) {
    super(game, "Mardu Roughrider", "Khans of Tarkir", "KTK");
  }
}

module.exports = MarduRoughrider;
