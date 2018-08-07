"use strict";
const Constants = require ("../../../Constants");
const KiyomaroFirsttoStandBase = require("../setSOK/KiyomaroFirsttoStand");

class KiyomaroFirsttoStand extends KiyomaroFirsttoStandBase {
  constructor (game) {
    super(game, "Kiyomaro, First to Stand", "Prerelease Events", "PPRE");
  }
}

module.exports = KiyomaroFirsttoStand;
