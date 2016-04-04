"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AngelicPage extends Card {
  constructor(game) {
    super(game, "Angelic Page", "Battle Royale Box Set", "BRB");
  }
}

module.exports = AngelicPage;
