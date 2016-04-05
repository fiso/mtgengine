"use strict";
const Constants = require ("../../../Constants");
const ArrestBase = require("../setpMEI/Arrest");

class Arrest extends ArrestBase {
  constructor(game) {
    super(game, "Arrest", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = Arrest;
