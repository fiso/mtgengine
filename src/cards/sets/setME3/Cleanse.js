"use strict";
const Constants = require ("../../../Constants");
const CleanseBase = require("../setLEG/Cleanse");

class Cleanse extends CleanseBase {
  constructor (game) {
    super(game, "Cleanse", "Masters Edition III", "ME3");
  }
}

module.exports = Cleanse;
