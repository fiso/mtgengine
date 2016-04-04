"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const VengefulRebirthBase = require("../setARB/VengefulRebirth.js");

class VengefulRebirth extends VengefulRebirthBase {
  constructor(game) {
    super(game, "Vengeful Rebirth", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = VengefulRebirth;
