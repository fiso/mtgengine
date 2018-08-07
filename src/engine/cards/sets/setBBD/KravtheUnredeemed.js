"use strict";
const Constants = require ("../../../Constants");
const KravtheUnredeemedBase = require("../setPBBD/KravtheUnredeemed");

class KravtheUnredeemed extends KravtheUnredeemedBase {
  constructor (game) {
    super(game, "Krav, the Unredeemed", "Battlebond", "BBD");
  }
}

module.exports = KravtheUnredeemed;
