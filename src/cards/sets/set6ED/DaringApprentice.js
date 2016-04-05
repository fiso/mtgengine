"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DaringApprentice extends UnimplementedCard {
  constructor(game) {
    super(game, "Daring Apprentice", "Classic Sixth Edition", "6ED");
  }
}

module.exports = DaringApprentice;
