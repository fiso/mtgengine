"use strict";
const Constants = require ("../../../Constants");
const HondenofLifesWebBase = require("../setEMA/HondenofLifesWeb");

class HondenofLifesWeb extends HondenofLifesWebBase {
  constructor (game) {
    super(game, "Honden of Life's Web", "Champions of Kamigawa", "CHK");
  }
}

module.exports = HondenofLifesWeb;
