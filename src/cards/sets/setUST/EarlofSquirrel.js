"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EarlofSquirrel extends UnimplementedCard {
  constructor (game) {
    super(game, "Earl of Squirrel", "Unstable", "UST");
  }
}

module.exports = EarlofSquirrel;
