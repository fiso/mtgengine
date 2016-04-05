"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Progenitus extends UnimplementedCard {
  constructor(game) {
    super(game, "Progenitus", "Conflux", "CON");
  }
}

module.exports = Progenitus;
