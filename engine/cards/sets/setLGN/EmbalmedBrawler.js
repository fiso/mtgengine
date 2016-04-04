"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EmbalmedBrawler extends Card {
  constructor(game) {
    super(game, "Embalmed Brawler", "Legions", "LGN");
  }
}

module.exports = EmbalmedBrawler;
