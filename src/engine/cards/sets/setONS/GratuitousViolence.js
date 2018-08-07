"use strict";
const Constants = require ("../../../Constants");
const GratuitousViolenceBase = require("../setCN2/GratuitousViolence");

class GratuitousViolence extends GratuitousViolenceBase {
  constructor (game) {
    super(game, "Gratuitous Violence", "Onslaught", "ONS");
  }
}

module.exports = GratuitousViolence;
