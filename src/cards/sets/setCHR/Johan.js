"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Johan extends UnimplementedCard {
  constructor (game) {
    super(game, "Johan", "Chronicles", "CHR");
  }
}

module.exports = Johan;
