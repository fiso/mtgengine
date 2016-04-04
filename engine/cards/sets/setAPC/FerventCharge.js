"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FerventCharge extends Card {
  constructor(game) {
    super(game, "Fervent Charge", "Apocalypse", "APC");
  }
}

module.exports = FerventCharge;
