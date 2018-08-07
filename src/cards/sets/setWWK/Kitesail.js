"use strict";
const Constants = require ("../../../Constants");
const KitesailBase = require("../setCN2/Kitesail");

class Kitesail extends KitesailBase {
  constructor (game) {
    super(game, "Kitesail", "Worldwake", "WWK");
  }
}

module.exports = Kitesail;
