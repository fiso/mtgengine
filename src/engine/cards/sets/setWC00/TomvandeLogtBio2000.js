"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TomvandeLogtBio2000 extends UnimplementedCard {
  constructor (game) {
    super(game, "Tom van de Logt Bio (2000)", "World Championship Decks 2000", "WC00");
  }
}

module.exports = TomvandeLogtBio2000;
