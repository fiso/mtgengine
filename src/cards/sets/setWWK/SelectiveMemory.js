"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SelectiveMemory extends UnimplementedCard {
  constructor (game) {
    super(game, "Selective Memory", "Worldwake", "WWK");
  }
}

module.exports = SelectiveMemory;
