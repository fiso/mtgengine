"use strict";
const Constants = require ("../../../Constants");
const KitesailBase = require("../setCN2/Kitesail");

class Kitesail extends KitesailBase {
  constructor (game) {
    super(game, "Kitesail", "Magic 2013", "M13");
  }
}

module.exports = Kitesail;
