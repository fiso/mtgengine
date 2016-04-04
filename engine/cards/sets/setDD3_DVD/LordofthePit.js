"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LordofthePitBase = require("../setCED/LordofthePit.js");

class LordofthePit extends LordofthePitBase {
  constructor(game) {
    super(game, "Lord of the Pit", "Duel Decks Anthology, Divine vs. Demonic", "DD3_DVD");
  }
}

module.exports = LordofthePit;
