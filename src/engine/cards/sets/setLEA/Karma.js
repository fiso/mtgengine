"use strict";
const Constants = require ("../../../Constants");
const KarmaBase = require("../set8ED/Karma");

class Karma extends KarmaBase {
  constructor (game) {
    super(game, "Karma", "Limited Edition Alpha", "LEA");
  }
}

module.exports = Karma;
