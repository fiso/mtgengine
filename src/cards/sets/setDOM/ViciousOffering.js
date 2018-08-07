"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ViciousOffering extends UnimplementedCard {
  constructor (game) {
    super(game, "Vicious Offering", "Dominaria", "DOM");
  }
}

module.exports = ViciousOffering;
