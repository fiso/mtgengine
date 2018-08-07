"use strict";
const Constants = require ("../../../Constants");
const RivalsDuelBase = require("../setPCA/RivalsDuel");

class RivalsDuel extends RivalsDuelBase {
  constructor (game) {
    super(game, "Rivals' Duel", "Morningtide", "MOR");
  }
}

module.exports = RivalsDuel;
