"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Coretapper extends UnimplementedCard {
  constructor(game) {
    super(game, "Coretapper", "Darksteel", "DST");
  }
}

module.exports = Coretapper;
