"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FerventCathar extends Card {
  constructor(game) {
    super(game, "Fervent Cathar", "Avacyn Restored", "AVR");
  }
}

module.exports = FerventCathar;
