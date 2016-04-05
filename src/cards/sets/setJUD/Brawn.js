"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Brawn extends UnimplementedCard {
  constructor(game) {
    super(game, "Brawn", "Judgment", "JUD");
  }
}

module.exports = Brawn;
