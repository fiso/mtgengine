"use strict";
const Constants = require ("../../../Constants");
const AnticipateBase = require("../setM19/Anticipate");

class Anticipate extends AnticipateBase {
  constructor (game) {
    super(game, "Anticipate", "Friday Night Magic 2015", "F15");
  }
}

module.exports = Anticipate;
