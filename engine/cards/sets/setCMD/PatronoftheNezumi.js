"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PatronoftheNezumiBase = require("../setBOK/PatronoftheNezumi.js");

class PatronoftheNezumi extends PatronoftheNezumiBase {
  constructor(game) {
    super(game, "Patron of the Nezumi", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = PatronoftheNezumi;
