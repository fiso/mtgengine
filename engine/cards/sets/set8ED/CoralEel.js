"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CoralEel extends UnimplementedCard {
  constructor(game) {
    super(game, "Coral Eel", "Eighth Edition", "8ED");
  }
}

module.exports = CoralEel;
