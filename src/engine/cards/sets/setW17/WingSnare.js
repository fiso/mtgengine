"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WingSnare extends UnimplementedCard {
  constructor (game) {
    super(game, "Wing Snare", "Welcome Deck 2017", "W17");
  }
}

module.exports = WingSnare;
