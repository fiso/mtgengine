"use strict";
const Constants = require ("../../../Constants");
const HondenofLifesWebBase = require("../setCHK/HondenofLifesWeb");

class HondenofLifesWeb extends HondenofLifesWebBase {
  constructor (game) {
    super(game, "Honden of Life's Web", "Eternal Masters", "EMA");
  }
}

module.exports = HondenofLifesWeb;
