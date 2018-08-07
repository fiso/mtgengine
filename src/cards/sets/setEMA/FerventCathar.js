"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FerventCathar extends UnimplementedCard {
  constructor (game) {
    super(game, "Fervent Cathar", "Eternal Masters", "EMA");
  }
}

module.exports = FerventCathar;
