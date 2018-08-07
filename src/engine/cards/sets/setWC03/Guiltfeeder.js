"use strict";
const Constants = require ("../../../Constants");
const GuiltfeederBase = require("../setC16/Guiltfeeder");

class Guiltfeeder extends GuiltfeederBase {
  constructor (game) {
    super(game, "Guiltfeeder", "World Championship Decks 2003", "WC03");
  }
}

module.exports = Guiltfeeder;
