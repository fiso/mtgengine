"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Siegecraft extends UnimplementedCard {
  constructor(game) {
    super(game, "Siegecraft", "Khans of Tarkir", "KTK");
  }
}

module.exports = Siegecraft;
