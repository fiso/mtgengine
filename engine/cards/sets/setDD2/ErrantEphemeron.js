"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ErrantEphemeronBase = require("../setDD3_JVC/ErrantEphemeron.js");

class ErrantEphemeron extends ErrantEphemeronBase {
  constructor(game) {
    super(game, "Errant Ephemeron", "Duel Decks: Jace vs. Chandra", "DD2");
  }
}

module.exports = ErrantEphemeron;
