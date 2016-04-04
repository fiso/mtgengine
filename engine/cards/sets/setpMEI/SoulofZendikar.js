"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SoulofZendikarBase = require("../setM15/SoulofZendikar.js");

class SoulofZendikar extends SoulofZendikarBase {
  constructor(game) {
    super(game, "Soul of Zendikar", "Media Inserts", "pMEI");
  }
}

module.exports = SoulofZendikar;
