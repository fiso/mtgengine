"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Shellephant extends UnimplementedCard {
  constructor (game) {
    super(game, "Shellephant", "Unstable", "UST");
  }
}

module.exports = Shellephant;
