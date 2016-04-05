"use strict";
const Constants = require ("../../../Constants");
const VengefulRebirthBase = require("../setARB/VengefulRebirth");

class VengefulRebirth extends VengefulRebirthBase {
  constructor(game) {
    super(game, "Vengeful Rebirth", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = VengefulRebirth;
