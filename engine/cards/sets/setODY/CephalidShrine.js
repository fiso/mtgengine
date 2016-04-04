"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CephalidShrine extends Card {
  constructor(game) {
    super(game, "Cephalid Shrine", "Odyssey", "ODY");
  }
}

module.exports = CephalidShrine;
