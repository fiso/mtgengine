"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Confiscate extends UnimplementedCard {
  constructor (game) {
    super(game, "Confiscate", "Eighth Edition", "8ED");
  }
}

module.exports = Confiscate;
