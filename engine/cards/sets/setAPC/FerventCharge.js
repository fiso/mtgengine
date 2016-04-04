"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FerventCharge extends UnimplementedCard {
  constructor(game) {
    super(game, "Fervent Charge", "Apocalypse", "APC");
  }
}

module.exports = FerventCharge;
