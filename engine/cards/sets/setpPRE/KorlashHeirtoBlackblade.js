"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const KorlashHeirtoBlackbladeBase = require("../setFUT/KorlashHeirtoBlackblade.js");

class KorlashHeirtoBlackblade extends KorlashHeirtoBlackbladeBase {
  constructor(game) {
    super(game, "Korlash, Heir to Blackblade", "Prerelease Events", "pPRE");
  }
}

module.exports = KorlashHeirtoBlackblade;
