"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const KabiraVindicatorBase = require("../setDDG/KabiraVindicator.js");

class KabiraVindicator extends KabiraVindicatorBase {
  constructor(game) {
    super(game, "Kabira Vindicator", "Duel Decks: Zendikar vs. Eldrazi", "DDP");
  }
}

module.exports = KabiraVindicator;
