"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BojukaBrigand extends UnimplementedCard {
  constructor(game) {
    super(game, "Bojuka Brigand", "Worldwake", "WWK");
  }
}

module.exports = BojukaBrigand;
