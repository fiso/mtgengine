"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThroatSlitter extends UnimplementedCard {
  constructor(game) {
    super(game, "Throat Slitter", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = ThroatSlitter;
