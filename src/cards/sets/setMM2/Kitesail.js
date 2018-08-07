"use strict";
const Constants = require ("../../../Constants");
const KitesailBase = require("../setCN2/Kitesail");

class Kitesail extends KitesailBase {
  constructor (game) {
    super(game, "Kitesail", "Modern Masters 2015", "MM2");
  }
}

module.exports = Kitesail;
