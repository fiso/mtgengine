"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Apocalypse extends Card {
  constructor(game) {
    super(game, "Apocalypse", "Tempest", "TMP");
  }
}

module.exports = Apocalypse;
