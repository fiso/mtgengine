"use strict";
const Constants = require ("../../../Constants");
const SkullwinderBase = require("../setCMA/Skullwinder");

class Skullwinder extends SkullwinderBase {
  constructor (game) {
    super(game, "Skullwinder", "Commander 2015", "C15");
  }
}

module.exports = Skullwinder;
