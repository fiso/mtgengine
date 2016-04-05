"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TombHex extends UnimplementedCard {
  constructor(game) {
    super(game, "Tomb Hex", "Worldwake", "WWK");
  }
}

module.exports = TombHex;
