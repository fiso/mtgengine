"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CalltheCavalry extends UnimplementedCard {
  constructor (game) {
    super(game, "Call the Cavalry", "Dominaria", "DOM");
  }
}

module.exports = CalltheCavalry;
