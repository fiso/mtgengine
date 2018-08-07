"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Mindswipe extends UnimplementedCard {
  constructor (game) {
    super(game, "Mindswipe", "Khans of Tarkir", "KTK");
  }
}

module.exports = Mindswipe;
