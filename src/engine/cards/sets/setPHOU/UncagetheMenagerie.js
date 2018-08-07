"use strict";
const Constants = require ("../../../Constants");
const UncagetheMenagerieBase = require("../setHOU/UncagetheMenagerie");

class UncagetheMenagerie extends UncagetheMenagerieBase {
  constructor (game) {
    super(game, "Uncage the Menagerie", "Hour of Devastation Promos", "PHOU");
  }
}

module.exports = UncagetheMenagerie;
