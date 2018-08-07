"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HeadBanger extends UnimplementedCard {
  constructor (game) {
    super(game, "Head Banger", "Unstable", "UST");
  }
}

module.exports = HeadBanger;
