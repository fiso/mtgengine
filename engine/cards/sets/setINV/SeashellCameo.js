"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SeashellCameo extends Card {
  constructor(game) {
    super(game, "Seashell Cameo", "Invasion", "INV");
  }
}

module.exports = SeashellCameo;
