"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VedalkenCertarch extends UnimplementedCard {
  constructor(game) {
    super(game, "Vedalken Certarch", "Scars of Mirrodin", "SOM");
  }
}

module.exports = VedalkenCertarch;
