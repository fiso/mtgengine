"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ThoughtlaceBase = require("../setCED/Thoughtlace.js");

class Thoughtlace extends ThoughtlaceBase {
  constructor(game) {
    super(game, "Thoughtlace", "Limited Edition Beta", "LEB");
  }
}

module.exports = Thoughtlace;
