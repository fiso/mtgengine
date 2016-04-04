"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WingmateRoc extends Card {
  constructor(game) {
    super(game, "Wingmate Roc", "Khans of Tarkir", "KTK");
  }
}

module.exports = WingmateRoc;
