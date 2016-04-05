"use strict";
const Constants = require ("../../../Constants");
const RivalsDuelBase = require("../setMOR/RivalsDuel");

class RivalsDuel extends RivalsDuelBase {
  constructor(game) {
    super(game, "Rivals' Duel", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = RivalsDuel;
