"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JanoschKühnBio2000 extends UnimplementedCard {
  constructor (game) {
    super(game, "Janosch Kühn Bio (2000)", "World Championship Decks 2000", "WC00");
  }
}

module.exports = JanoschKühnBio2000;
