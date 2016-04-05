"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Staggershock extends UnimplementedCard {
  constructor(game) {
    super(game, "Staggershock", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = Staggershock;
