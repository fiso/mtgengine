"use strict";
const Constants = require ("../../../Constants");
const DrakestownForgottenBase = require("../setCNS/DrakestownForgotten");

class DrakestownForgotten extends DrakestownForgottenBase {
  constructor (game) {
    super(game, "Drakestown Forgotten", "Vintage Masters", "VMA");
  }
}

module.exports = DrakestownForgotten;
