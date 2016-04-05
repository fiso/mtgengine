"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TitaniasChosen extends UnimplementedCard {
  constructor(game) {
    super(game, "Titania's Chosen", "Commander 2014", "C14");
  }
}

module.exports = TitaniasChosen;
