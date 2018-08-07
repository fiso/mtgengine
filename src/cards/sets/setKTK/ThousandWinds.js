"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThousandWinds extends UnimplementedCard {
  constructor (game) {
    super(game, "Thousand Winds", "Khans of Tarkir", "KTK");
  }
}

module.exports = ThousandWinds;
