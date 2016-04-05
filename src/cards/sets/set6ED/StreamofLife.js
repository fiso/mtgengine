"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StreamofLife extends UnimplementedCard {
  constructor(game) {
    super(game, "Stream of Life", "Classic Sixth Edition", "6ED");
  }
}

module.exports = StreamofLife;
