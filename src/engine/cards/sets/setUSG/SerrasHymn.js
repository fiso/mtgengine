"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SerrasHymn extends UnimplementedCard {
  constructor (game) {
    super(game, "Serra's Hymn", "Urza's Saga", "USG");
  }
}

module.exports = SerrasHymn;
