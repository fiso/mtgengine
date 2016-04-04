"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const NezumiGraverobberBase = require("../setCHK/NezumiGraverobber.js");

class NezumiGraverobber extends NezumiGraverobberBase {
  constructor(game) {
    super(game, "Nezumi Graverobber", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = NezumiGraverobber;
