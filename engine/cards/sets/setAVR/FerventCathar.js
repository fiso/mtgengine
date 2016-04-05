"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FerventCathar extends UnimplementedCard {
  constructor(game) {
    super(game, "Fervent Cathar", "Avacyn Restored", "AVR");
  }
}

module.exports = FerventCathar;
