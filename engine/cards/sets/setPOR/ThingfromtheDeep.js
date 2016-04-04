"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ThingfromtheDeepBase = require("../setME4/ThingfromtheDeep.js");

class ThingfromtheDeep extends ThingfromtheDeepBase {
  constructor(game) {
    super(game, "Thing from the Deep", "Portal", "POR");
  }
}

module.exports = ThingfromtheDeep;
