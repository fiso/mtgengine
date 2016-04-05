"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Rhox extends UnimplementedCard {
  constructor(game) {
    super(game, "Rhox", "Eighth Edition", "8ED");
  }
}

module.exports = Rhox;
