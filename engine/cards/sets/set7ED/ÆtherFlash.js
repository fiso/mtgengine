"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ÆtherFlashBase = require("../set6ED/ÆtherFlash.js");

class ÆtherFlash extends ÆtherFlashBase {
  constructor(game) {
    super(game, "Æther Flash", "Seventh Edition", "7ED");
  }
}

module.exports = ÆtherFlash;
