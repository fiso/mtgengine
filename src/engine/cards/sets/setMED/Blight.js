"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Blight extends UnimplementedCard {
  constructor (game) {
    super(game, "Blight", "Masters Edition", "MED");
  }
}

module.exports = Blight;
