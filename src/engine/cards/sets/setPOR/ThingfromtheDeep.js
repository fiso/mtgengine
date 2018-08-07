"use strict";
const Constants = require ("../../../Constants");
const ThingfromtheDeepBase = require("../setME4/ThingfromtheDeep");

class ThingfromtheDeep extends ThingfromtheDeepBase {
  constructor (game) {
    super(game, "Thing from the Deep", "Portal", "POR");
  }
}

module.exports = ThingfromtheDeep;
