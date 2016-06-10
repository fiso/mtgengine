"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Reflexes extends UnimplementedCard {
  constructor (game) {
    super(game, "Reflexes", "Eighth Edition", "8ED");
  }
}

module.exports = Reflexes;
