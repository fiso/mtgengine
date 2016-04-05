"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Petravark extends UnimplementedCard {
  constructor(game) {
    super(game, "Petravark", "Torment", "TOR");
  }
}

module.exports = Petravark;
