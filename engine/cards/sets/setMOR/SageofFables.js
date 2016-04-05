"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SageofFables extends UnimplementedCard {
  constructor(game) {
    super(game, "Sage of Fables", "Morningtide", "MOR");
  }
}

module.exports = SageofFables;
