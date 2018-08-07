"use strict";
const Constants = require ("../../../Constants");
const GrafdiggersCageBase = require("../setMM3/GrafdiggersCage");

class GrafdiggersCage extends GrafdiggersCageBase {
  constructor (game) {
    super(game, "Grafdigger's Cage", "Dark Ascension", "DKA");
  }
}

module.exports = GrafdiggersCage;
