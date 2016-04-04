"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FolkofthePines extends Card {
  constructor(game) {
    super(game, "Folk of the Pines", "Deckmasters", "DKM");
  }
}

module.exports = FolkofthePines;
