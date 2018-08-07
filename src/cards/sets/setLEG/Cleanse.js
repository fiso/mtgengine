"use strict";
const Constants = require ("../../../Constants");
const CleanseBase = require("../setME3/Cleanse");

class Cleanse extends CleanseBase {
  constructor (game) {
    super(game, "Cleanse", "Legends", "LEG");
  }
}

module.exports = Cleanse;
