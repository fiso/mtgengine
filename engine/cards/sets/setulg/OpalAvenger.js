"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class OpalAvenger extends Card {
  constructor(game) {
    super(game, "Opal Avenger", "Urza's Legacy", "ULG");
  }
}

module.exports = OpalAvenger;
