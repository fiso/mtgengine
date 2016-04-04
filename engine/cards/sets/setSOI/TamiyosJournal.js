"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TamiyosJournal extends Card {
  constructor(game) {
    super(game, "Tamiyo's Journal", "Shadows over Innistrad", "SOI");
  }
}

module.exports = TamiyosJournal;
