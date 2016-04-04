"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DemonsJesterBase = require("../setDIS/DemonsJester.js");

class DemonsJester extends DemonsJesterBase {
  constructor(game) {
    super(game, "Demon's Jester", "Duel Decks: Divine vs. Demonic", "DDC");
  }
}

module.exports = DemonsJester;
