"use strict";
const Constants = require ("../../../Constants");
const CallerofthePackBase = require("../setCMA/CallerofthePack");

class CallerofthePack extends CallerofthePackBase {
  constructor (game) {
    super(game, "Caller of the Pack", "Commander 2015", "C15");
  }
}

module.exports = CallerofthePack;
