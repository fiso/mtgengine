"use strict";
const Constants = require ("../../../Constants");
const ThoughtcastBase = require("../setDDF/Thoughtcast");

class Thoughtcast extends ThoughtcastBase {
  constructor(game) {
    super(game, "Thoughtcast", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = Thoughtcast;
