"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Nausea extends UnimplementedCard {
  constructor (game) {
    super(game, "Nausea", "Eighth Edition", "8ED");
  }
}

module.exports = Nausea;
