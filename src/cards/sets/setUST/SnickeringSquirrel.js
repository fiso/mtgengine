"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SnickeringSquirrel extends UnimplementedCard {
  constructor (game) {
    super(game, "Snickering Squirrel", "Unstable", "UST");
  }
}

module.exports = SnickeringSquirrel;
