"use strict";
const Constants = require ("../../../Constants");
const ArrestBase = require("../setpMEI/Arrest");

class Arrest extends ArrestBase {
  constructor(game) {
    super(game, "Arrest", "Mercadian Masques", "MMQ");
  }
}

module.exports = Arrest;
