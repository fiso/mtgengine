"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MimicVat extends Card {
  constructor(game) {
    super(game, "Mimic Vat", "Scars of Mirrodin", "SOM");
  }
}

module.exports = MimicVat;
