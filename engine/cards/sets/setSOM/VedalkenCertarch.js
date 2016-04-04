"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VedalkenCertarch extends Card {
  constructor(game) {
    super(game, "Vedalken Certarch", "Scars of Mirrodin", "SOM");
  }
}

module.exports = VedalkenCertarch;
