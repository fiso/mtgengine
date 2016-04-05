"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MarduHordechief extends UnimplementedCard {
  constructor(game) {
    super(game, "Mardu Hordechief", "Khans of Tarkir", "KTK");
  }
}

module.exports = MarduHordechief;
