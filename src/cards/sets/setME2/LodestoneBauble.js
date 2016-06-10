"use strict";
const Constants = require ("../../../Constants");
const LodestoneBaubleBase = require("../setALL/LodestoneBauble");

class LodestoneBauble extends LodestoneBaubleBase {
  constructor (game) {
    super(game, "Lodestone Bauble", "Masters Edition II", "ME2");
  }
}

module.exports = LodestoneBauble;
