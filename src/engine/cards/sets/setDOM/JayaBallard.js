"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JayaBallard extends UnimplementedCard {
  constructor (game) {
    super(game, "Jaya Ballard", "Dominaria", "DOM");
  }
}

module.exports = JayaBallard;
