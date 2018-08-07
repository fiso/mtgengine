"use strict";
const Constants = require ("../../../Constants");
const LodestoneBaubleBase = require("../setME2/LodestoneBauble");

class LodestoneBauble extends LodestoneBaubleBase {
  constructor (game) {
    super(game, "Lodestone Bauble", "Alliances", "ALL");
  }
}

module.exports = LodestoneBauble;
