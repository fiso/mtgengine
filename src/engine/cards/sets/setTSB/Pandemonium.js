"use strict";
const Constants = require ("../../../Constants");
const PandemoniumBase = require("../setTPR/Pandemonium");

class Pandemonium extends PandemoniumBase {
  constructor (game) {
    super(game, "Pandemonium", "Time Spiral Timeshifted", "TSB");
  }
}

module.exports = Pandemonium;
