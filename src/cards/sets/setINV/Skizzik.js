"use strict";
const Constants = require ("../../../Constants");
const SkizzikBase = require("../setDOM/Skizzik");

class Skizzik extends SkizzikBase {
  constructor (game) {
    super(game, "Skizzik", "Invasion", "INV");
  }
}

module.exports = Skizzik;
