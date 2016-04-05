"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DreadWarlock extends UnimplementedCard {
  constructor(game) {
    super(game, "Dread Warlock", "Magic 2010", "M10");
  }
}

module.exports = DreadWarlock;
