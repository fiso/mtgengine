"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Cognivore extends UnimplementedCard {
  constructor(game) {
    super(game, "Cognivore", "Odyssey", "ODY");
  }
}

module.exports = Cognivore;
