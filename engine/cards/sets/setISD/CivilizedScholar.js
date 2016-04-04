"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CivilizedScholar extends Card {
  constructor(game) {
    super(game, "Civilized Scholar", "Innistrad", "ISD");
  }
}

module.exports = CivilizedScholar;
