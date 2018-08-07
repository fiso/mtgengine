"use strict";
const Constants = require ("../../../Constants");
const TomeScourBase = require("../setM14/TomeScour");

class TomeScour extends TomeScourBase {
  constructor (game) {
    super(game, "Tome Scour", "Magic 2010", "M10");
  }
}

module.exports = TomeScour;
