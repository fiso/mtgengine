"use strict";
const Constants = require ("../../../Constants");
const PhantomCentaurBase = require("../setTD0/PhantomCentaur");

class PhantomCentaur extends PhantomCentaurBase {
  constructor (game) {
    super(game, "Phantom Centaur", "World Championship Decks 2002", "WC02");
  }
}

module.exports = PhantomCentaur;
