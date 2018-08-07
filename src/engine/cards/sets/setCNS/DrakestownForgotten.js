"use strict";
const Constants = require ("../../../Constants");
const DrakestownForgottenBase = require("../setVMA/DrakestownForgotten");

class DrakestownForgotten extends DrakestownForgottenBase {
  constructor (game) {
    super(game, "Drakestown Forgotten", "Conspiracy", "CNS");
  }
}

module.exports = DrakestownForgotten;
