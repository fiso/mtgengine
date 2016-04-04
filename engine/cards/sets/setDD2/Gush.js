"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GushBase = require("../setDD3_JVC/Gush.js");

class Gush extends GushBase {
  constructor(game) {
    super(game, "Gush", "Duel Decks: Jace vs. Chandra", "DD2");
  }
}

module.exports = Gush;
