"use strict";
const Constants = require ("../../../Constants");
const DamnationBase = require("../setMP2/Damnation");

class Damnation extends DamnationBase {
  constructor (game) {
    super(game, "Damnation", "Modern Masters 2017", "MM3");
  }
}

module.exports = Damnation;
