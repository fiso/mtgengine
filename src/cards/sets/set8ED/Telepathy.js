"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Telepathy extends UnimplementedCard {
  constructor(game) {
    super(game, "Telepathy", "Eighth Edition", "8ED");
  }
}

module.exports = Telepathy;
