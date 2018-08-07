"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OathofTeferi extends UnimplementedCard {
  constructor (game) {
    super(game, "Oath of Teferi", "Dominaria", "DOM");
  }
}

module.exports = OathofTeferi;
