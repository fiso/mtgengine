"use strict";
const Constants = require ("../../../Constants");
const DispelBase = require("../setBFZ/Dispel");

class Dispel extends DispelBase {
  constructor(game) {
    super(game, "Dispel", "Worldwake", "WWK");
  }
}

module.exports = Dispel;
