"use strict";
const Constants = require ("../../../Constants");
const KitesailBase = require("../setM13/Kitesail");

class Kitesail extends KitesailBase {
  constructor(game) {
    super(game, "Kitesail", "Worldwake", "WWK");
  }
}

module.exports = Kitesail;
