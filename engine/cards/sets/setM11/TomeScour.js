"use strict";
const Constants = require ("../../../Constants");
const TomeScourBase = require("../setM10/TomeScour");

class TomeScour extends TomeScourBase {
  constructor(game) {
    super(game, "Tome Scour", "Magic 2011", "M11");
  }
}

module.exports = TomeScour;
