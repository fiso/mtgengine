"use strict";
const Constants = require ("../../../Constants");
const SoltariTrooperBase = require("../setTMP/SoltariTrooper");

class SoltariTrooper extends SoltariTrooperBase {
  constructor(game) {
    super(game, "Soltari Trooper", "Vintage Masters", "VMA");
  }
}

module.exports = SoltariTrooper;
