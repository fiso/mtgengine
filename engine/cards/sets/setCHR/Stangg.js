"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Stangg extends UnimplementedCard {
  constructor(game) {
    super(game, "Stangg", "Chronicles", "CHR");
  }
}

module.exports = Stangg;
