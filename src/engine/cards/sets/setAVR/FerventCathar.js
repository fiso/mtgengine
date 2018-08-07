"use strict";
const Constants = require ("../../../Constants");
const FerventCatharBase = require("../setEMA/FerventCathar");

class FerventCathar extends FerventCatharBase {
  constructor (game) {
    super(game, "Fervent Cathar", "Avacyn Restored", "AVR");
  }
}

module.exports = FerventCathar;
