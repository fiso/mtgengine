"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NamelessRace extends Card {
  constructor(game) {
    super(game, "Nameless Race", "The Dark", "DRK");
  }
}

module.exports = NamelessRace;
