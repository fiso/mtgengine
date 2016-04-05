"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Shahrazad extends UnimplementedCard {
  constructor(game) {
    super(game, "Shahrazad", "Arabian Nights", "ARN");
  }
}

module.exports = Shahrazad;
