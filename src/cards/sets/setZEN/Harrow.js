"use strict";
const Constants = require ("../../../Constants");
const HarrowBase = require("../setC18/Harrow");

class Harrow extends HarrowBase {
  constructor (game) {
    super(game, "Harrow", "Zendikar", "ZEN");
  }
}

module.exports = Harrow;
