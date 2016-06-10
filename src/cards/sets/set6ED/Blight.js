"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Blight extends UnimplementedCard {
  constructor (game) {
    super(game, "Blight", "Classic Sixth Edition", "6ED");
  }
}

module.exports = Blight;
