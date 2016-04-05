"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Lifelink extends UnimplementedCard {
  constructor(game) {
    super(game, "Lifelink", "Magic 2010", "M10");
  }
}

module.exports = Lifelink;
