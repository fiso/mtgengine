"use strict";
const Constants = require ("../../../Constants");
const TomeScourBase = require("../setM10/TomeScour");

class TomeScour extends TomeScourBase {
  constructor(game) {
    super(game, "Tome Scour", "Magic 2014 Core Set", "M14");
  }
}

module.exports = TomeScour;
