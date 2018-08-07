"use strict";
const Constants = require ("../../../Constants");
const IneffableBlessingBase = require("../setUST/IneffableBlessing");

class IneffableBlessing extends IneffableBlessingBase {
  constructor (game) {
    super(game, "Ineffable Blessing", "Unstable", "UST");
  }
}

module.exports = IneffableBlessing;
