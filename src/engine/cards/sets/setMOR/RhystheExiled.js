"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RhystheExiled extends UnimplementedCard {
  constructor (game) {
    super(game, "Rhys the Exiled", "Morningtide", "MOR");
  }
}

module.exports = RhystheExiled;
