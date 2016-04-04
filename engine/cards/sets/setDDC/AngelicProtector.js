"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AngelicProtectorBase = require("../setDD3_DVD/AngelicProtector.js");

class AngelicProtector extends AngelicProtectorBase {
  constructor(game) {
    super(game, "Angelic Protector", "Duel Decks: Divine vs. Demonic", "DDC");
  }
}

module.exports = AngelicProtector;
