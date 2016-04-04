"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ScrublandBase = require("../setCED/Scrubland.js");

class Scrubland extends ScrublandBase {
  constructor(game) {
    super(game, "Scrubland", "Limited Edition Beta", "LEB");
  }
}

module.exports = Scrubland;
