"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HowlingChorus extends UnimplementedCard {
  constructor (game) {
    super(game, "Howling Chorus", "Eldritch Moon", "EMN");
  }
}

module.exports = HowlingChorus;
