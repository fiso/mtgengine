"use strict";
const Constants = require ("../../../Constants");
const CallerofthePackBase = require("../setCMA/CallerofthePack");

class CallerofthePack extends CallerofthePackBase {
  constructor (game) {
    super(game, "Caller of the Pack", "Legendary Cube", "PZ1");
  }
}

module.exports = CallerofthePack;
