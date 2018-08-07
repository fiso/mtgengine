"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShieldmageAdvocate extends UnimplementedCard {
  constructor (game) {
    super(game, "Shieldmage Advocate", "Judgment", "JUD");
  }
}

module.exports = ShieldmageAdvocate;
