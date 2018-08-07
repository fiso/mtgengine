"use strict";
const Constants = require ("../../../Constants");
const SporolothAncientBase = require("../setMMA/SporolothAncient");

class SporolothAncient extends SporolothAncientBase {
  constructor (game) {
    super(game, "Sporoloth Ancient", "Future Sight", "FUT");
  }
}

module.exports = SporolothAncient;
