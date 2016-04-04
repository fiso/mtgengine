"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TormodsCrypt extends Card {
  constructor(game) {
    super(game, "Tormod's Crypt", "Chronicles", "CHR");
  }
}

module.exports = TormodsCrypt;
