"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Waterwhirl extends UnimplementedCard {
  constructor(game) {
    super(game, "Waterwhirl", "Khans of Tarkir", "KTK");
  }
}

module.exports = Waterwhirl;
