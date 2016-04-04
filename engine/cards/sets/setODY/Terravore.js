"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Terravore extends UnimplementedCard {
  constructor(game) {
    super(game, "Terravore", "Odyssey", "ODY");
  }
}

module.exports = Terravore;
