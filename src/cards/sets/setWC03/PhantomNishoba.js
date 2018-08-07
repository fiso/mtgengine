"use strict";
const Constants = require ("../../../Constants");
const PhantomNishobaBase = require("../setC17/PhantomNishoba");

class PhantomNishoba extends PhantomNishobaBase {
  constructor (game) {
    super(game, "Phantom Nishoba", "World Championship Decks 2003", "WC03");
  }
}

module.exports = PhantomNishoba;
