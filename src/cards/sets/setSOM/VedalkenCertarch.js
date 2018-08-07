"use strict";
const Constants = require ("../../../Constants");
const VedalkenCertarchBase = require("../setTD2/VedalkenCertarch");

class VedalkenCertarch extends VedalkenCertarchBase {
  constructor (game) {
    super(game, "Vedalken Certarch", "Scars of Mirrodin", "SOM");
  }
}

module.exports = VedalkenCertarch;
