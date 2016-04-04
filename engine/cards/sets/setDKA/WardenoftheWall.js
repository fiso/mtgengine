"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WardenoftheWall extends Card {
  constructor(game) {
    super(game, "Warden of the Wall", "Dark Ascension", "DKA");
  }
}

module.exports = WardenoftheWall;
