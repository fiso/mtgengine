"use strict";
const Constants = require ("../../../Constants");
const SkullwinderBase = require("../setCMA/Skullwinder");

class Skullwinder extends SkullwinderBase {
  constructor (game) {
    super(game, "Skullwinder", "Legendary Cube", "PZ1");
  }
}

module.exports = Skullwinder;
