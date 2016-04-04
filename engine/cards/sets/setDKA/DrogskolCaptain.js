"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DrogskolCaptain extends Card {
  constructor(game) {
    super(game, "Drogskol Captain", "Dark Ascension", "DKA");
  }
}

module.exports = DrogskolCaptain;
