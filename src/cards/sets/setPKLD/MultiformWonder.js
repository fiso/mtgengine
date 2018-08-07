"use strict";
const Constants = require ("../../../Constants");
const MultiformWonderBase = require("../setKLD/MultiformWonder");

class MultiformWonder extends MultiformWonderBase {
  constructor (game) {
    super(game, "Multiform Wonder", "Kaladesh Promos", "PKLD");
  }
}

module.exports = MultiformWonder;
