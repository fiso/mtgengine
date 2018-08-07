"use strict";
const Constants = require ("../../../Constants");
const PhantomCentaurBase = require("../setTD0/PhantomCentaur");

class PhantomCentaur extends PhantomCentaurBase {
  constructor (game) {
    super(game, "Phantom Centaur", "Judgment", "JUD");
  }
}

module.exports = PhantomCentaur;
