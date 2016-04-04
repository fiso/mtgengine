"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const VengefulRebirthBase = require("../setARB/VengefulRebirth.js");

class VengefulRebirth extends VengefulRebirthBase {
  constructor(game) {
    super(game, "Vengeful Rebirth", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = VengefulRebirth;
