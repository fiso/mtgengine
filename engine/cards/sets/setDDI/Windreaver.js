"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WindreaverBase = require("../setDIS/Windreaver.js");

class Windreaver extends WindreaverBase {
  constructor(game) {
    super(game, "Windreaver", "Duel Decks: Venser vs. Koth", "DDI");
  }
}

module.exports = Windreaver;
