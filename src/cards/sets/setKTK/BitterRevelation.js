"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BitterRevelation extends UnimplementedCard {
  constructor(game) {
    super(game, "Bitter Revelation", "Khans of Tarkir", "KTK");
  }
}

module.exports = BitterRevelation;
