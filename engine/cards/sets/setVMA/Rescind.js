"use strict";
const Constants = require ("../../../Constants");
const RescindBase = require("../setUSG/Rescind");

class Rescind extends RescindBase {
  constructor(game) {
    super(game, "Rescind", "Vintage Masters", "VMA");
  }
}

module.exports = Rescind;
