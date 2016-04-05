"use strict";
const Constants = require ("../../../Constants");
const NessianAspBase = require("../setDDO/NessianAsp");

class NessianAsp extends NessianAspBase {
  constructor(game) {
    super(game, "Nessian Asp", "Theros", "THS");
  }
}

module.exports = NessianAsp;
