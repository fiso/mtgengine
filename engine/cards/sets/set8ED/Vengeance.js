"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Vengeance extends UnimplementedCard {
  constructor(game) {
    super(game, "Vengeance", "Eighth Edition", "8ED");
  }
}

module.exports = Vengeance;
