"use strict";
const Constants = require ("../../../Constants");
const HellriderBase = require("../setMM3/Hellrider");

class Hellrider extends HellriderBase {
  constructor (game) {
    super(game, "Hellrider", "Dark Ascension", "DKA");
  }
}

module.exports = Hellrider;
