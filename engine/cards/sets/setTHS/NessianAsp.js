"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const NessianAspBase = require("../setDDO/NessianAsp.js");

class NessianAsp extends NessianAspBase {
  constructor(game) {
    super(game, "Nessian Asp", "Theros", "THS");
  }
}

module.exports = NessianAsp;
