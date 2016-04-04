"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DiregrafCaptain extends Card {
  constructor(game) {
    super(game, "Diregraf Captain", "Dark Ascension", "DKA");
  }
}

module.exports = DiregrafCaptain;
