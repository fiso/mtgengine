"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PlatedRootwalla extends Card {
  constructor(game) {
    super(game, "Plated Rootwalla", "Battle Royale Box Set", "BRB");
  }
}

module.exports = PlatedRootwalla;
