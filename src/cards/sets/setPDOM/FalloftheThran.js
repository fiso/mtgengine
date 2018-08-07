"use strict";
const Constants = require ("../../../Constants");
const FalloftheThranBase = require("../setDOM/FalloftheThran");

class FalloftheThran extends FalloftheThranBase {
  constructor (game) {
    super(game, "Fall of the Thran", "Dominaria Promos", "PDOM");
  }
}

module.exports = FalloftheThran;
