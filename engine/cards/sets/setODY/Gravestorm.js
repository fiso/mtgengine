"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Gravestorm extends UnimplementedCard {
  constructor(game) {
    super(game, "Gravestorm", "Odyssey", "ODY");
  }
}

module.exports = Gravestorm;
