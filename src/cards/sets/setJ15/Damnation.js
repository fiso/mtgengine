"use strict";
const Constants = require ("../../../Constants");
const DamnationBase = require("../setMP2/Damnation");

class Damnation extends DamnationBase {
  constructor (game) {
    super(game, "Damnation", "Judge Gift Cards 2015", "J15");
  }
}

module.exports = Damnation;
