"use strict";
const Constants = require ("../../../Constants");
const WarElephantBase = require("../setARN/WarElephant");

class WarElephant extends WarElephantBase {
  constructor (game) {
    super(game, "War Elephant", "Chronicles", "CHR");
  }
}

module.exports = WarElephant;
