"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Boomerang extends UnimplementedCard {
  constructor(game) {
    super(game, "Boomerang", "Chronicles", "CHR");
  }
}

module.exports = Boomerang;
