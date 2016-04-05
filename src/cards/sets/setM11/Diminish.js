"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Diminish extends UnimplementedCard {
  constructor(game) {
    super(game, "Diminish", "Magic 2011", "M11");
  }
}

module.exports = Diminish;
