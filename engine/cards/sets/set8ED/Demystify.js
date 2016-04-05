"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Demystify extends UnimplementedCard {
  constructor(game) {
    super(game, "Demystify", "Eighth Edition", "8ED");
  }
}

module.exports = Demystify;
