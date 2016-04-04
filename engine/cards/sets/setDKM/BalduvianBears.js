"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BalduvianBears extends Card {
  constructor(game) {
    super(game, "Balduvian Bears", "Deckmasters", "DKM");
  }
}

module.exports = BalduvianBears;
