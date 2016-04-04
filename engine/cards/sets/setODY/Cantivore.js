"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Cantivore extends UnimplementedCard {
  constructor(game) {
    super(game, "Cantivore", "Odyssey", "ODY");
  }
}

module.exports = Cantivore;
