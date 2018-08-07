"use strict";
const Constants = require ("../../../Constants");
const MimicVatBase = require("../setC18/MimicVat");

class MimicVat extends MimicVatBase {
  constructor (game) {
    super(game, "Mimic Vat", "Scars of Mirrodin", "SOM");
  }
}

module.exports = MimicVat;
