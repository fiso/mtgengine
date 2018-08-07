"use strict";
const Constants = require ("../../../Constants");
const DesertBase = require("../setV12/Desert");

class Desert extends DesertBase {
  constructor (game) {
    super(game, "Desert", "Arabian Nights", "ARN");
  }
}

module.exports = Desert;
