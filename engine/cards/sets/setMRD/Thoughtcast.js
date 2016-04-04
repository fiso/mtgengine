"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ThoughtcastBase = require("../setDDF/Thoughtcast.js");

class Thoughtcast extends ThoughtcastBase {
  constructor(game) {
    super(game, "Thoughtcast", "Mirrodin", "MRD");
  }
}

module.exports = Thoughtcast;
