"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const KathariBomberBase = require("../setARB/KathariBomber.js");

class KathariBomber extends KathariBomberBase {
  constructor(game) {
    super(game, "Kathari Bomber", "Duel Decks: Speed vs. Cunning", "DDN");
  }
}

module.exports = KathariBomber;
