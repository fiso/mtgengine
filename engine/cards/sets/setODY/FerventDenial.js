"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FerventDenial extends Card {
  constructor(game) {
    super(game, "Fervent Denial", "Odyssey", "ODY");
  }
}

module.exports = FerventDenial;
