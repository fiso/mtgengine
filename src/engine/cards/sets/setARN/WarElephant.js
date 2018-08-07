"use strict";
const Constants = require ("../../../Constants");
const WarElephantBase = require("../setCHR/WarElephant");

class WarElephant extends WarElephantBase {
  constructor (game) {
    super(game, "War Elephant", "Arabian Nights", "ARN");
  }
}

module.exports = WarElephant;
