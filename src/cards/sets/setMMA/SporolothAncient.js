"use strict";
const Constants = require ("../../../Constants");
const SporolothAncientBase = require("../setFUT/SporolothAncient");

class SporolothAncient extends SporolothAncientBase {
  constructor (game) {
    super(game, "Sporoloth Ancient", "Modern Masters", "MMA");
  }
}

module.exports = SporolothAncient;
