"use strict";
const Constants = require ("../../../Constants");
const PurgeBase = require("../setTD2/Purge");

class Purge extends PurgeBase {
  constructor (game) {
    super(game, "Purge", "Darksteel", "DST");
  }
}

module.exports = Purge;
