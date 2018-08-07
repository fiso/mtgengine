"use strict";
const Constants = require ("../../../Constants");
const CentaurBase = require("../setTMM3/Centaur");

class Centaur extends CentaurBase {
  constructor (game) {
    super(game, "Centaur", "Judge Gift Cards 2012", "J12");
  }
}

module.exports = Centaur;
