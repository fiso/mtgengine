"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AngelicCurator extends Card {
  constructor(game) {
    super(game, "Angelic Curator", "Urza's Legacy", "ULG");
  }
}

module.exports = AngelicCurator;
