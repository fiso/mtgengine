"use strict";
const Constants = require ("../../../Constants");
const CrumblingSanctuaryBase = require("../setWC00/CrumblingSanctuary");

class CrumblingSanctuary extends CrumblingSanctuaryBase {
  constructor (game) {
    super(game, "Crumbling Sanctuary", "Mercadian Masques", "MMQ");
  }
}

module.exports = CrumblingSanctuary;
