"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Conflux extends UnimplementedCard {
  constructor (game) {
    super(game, "Conflux", "Conflux", "CON");
  }
}

module.exports = Conflux;
