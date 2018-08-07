"use strict";
const Constants = require ("../../../Constants");
const CephalidConstableBase = require("../set10E/CephalidConstable");

class CephalidConstable extends CephalidConstableBase {
  constructor (game) {
    super(game, "Cephalid Constable", "Judgment", "JUD");
  }
}

module.exports = CephalidConstable;
