"use strict";
const Constants = require ("../../../Constants");
const EarthbindBase = require("../setSUM/Earthbind");

class Earthbind extends EarthbindBase {
  constructor (game) {
    super(game, "Earthbind", "Intl. Collectors’ Edition", "CEI");
  }
}

module.exports = Earthbind;
