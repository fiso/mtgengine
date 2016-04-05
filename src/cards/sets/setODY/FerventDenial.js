"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FerventDenial extends UnimplementedCard {
  constructor(game) {
    super(game, "Fervent Denial", "Odyssey", "ODY");
  }
}

module.exports = FerventDenial;
