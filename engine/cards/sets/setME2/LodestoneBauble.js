"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LodestoneBaubleBase = require("../setALL/LodestoneBauble.js");

class LodestoneBauble extends LodestoneBaubleBase {
  constructor(game) {
    super(game, "Lodestone Bauble", "Masters Edition II", "ME2");
  }
}

module.exports = LodestoneBauble;
