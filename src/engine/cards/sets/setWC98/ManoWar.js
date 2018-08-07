"use strict";
const Constants = require ("../../../Constants");
const ManoWarBase = require("../setA25/ManoWar");

class ManoWar extends ManoWarBase {
  constructor (game) {
    super(game, "Man-o'-War", "World Championship Decks 1998", "WC98");
  }
}

module.exports = ManoWar;
