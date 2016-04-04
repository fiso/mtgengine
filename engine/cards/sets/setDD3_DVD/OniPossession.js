"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const OniPossessionBase = require("../setCHK/OniPossession.js");

class OniPossession extends OniPossessionBase {
  constructor(game) {
    super(game, "Oni Possession", "Duel Decks Anthology, Divine vs. Demonic", "DD3_DVD");
  }
}

module.exports = OniPossession;
