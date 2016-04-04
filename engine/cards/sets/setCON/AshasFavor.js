"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AshasFavor extends Card {
  constructor(game) {
    super(game, "Asha's Favor", "Conflux", "CON");
  }
}

module.exports = AshasFavor;
