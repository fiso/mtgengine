"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Kindslaver extends UnimplementedCard {
  constructor (game) {
    super(game, "Kindslaver", "Unstable", "UST");
  }
}

module.exports = Kindslaver;
