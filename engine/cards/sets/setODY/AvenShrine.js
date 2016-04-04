"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AvenShrine extends Card {
  constructor(game) {
    super(game, "Aven Shrine", "Odyssey", "ODY");
  }
}

module.exports = AvenShrine;
