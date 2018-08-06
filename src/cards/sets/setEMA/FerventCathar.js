"use strict";
const Constants = require ("../../../Constants");
const FerventCatharBase = require("../setAVR/FerventCathar");

class FerventCathar extends FerventCatharBase {
  constructor (game) {
    super(game, "Fervent Cathar", "Eternal Masters", "EMA");
  }
}

module.exports = FerventCathar;
