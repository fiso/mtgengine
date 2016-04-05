"use strict";
const Constants = require ("../../../Constants");
const KorlashHeirtoBlackbladeBase = require("../setFUT/KorlashHeirtoBlackblade");

class KorlashHeirtoBlackblade extends KorlashHeirtoBlackbladeBase {
  constructor(game) {
    super(game, "Korlash, Heir to Blackblade", "Prerelease Events", "pPRE");
  }
}

module.exports = KorlashHeirtoBlackblade;
