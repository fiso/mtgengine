"use strict";
const Constants = require ("../../../Constants");
const CephalidConstableBase = require("../setJUD/CephalidConstable");

class CephalidConstable extends CephalidConstableBase {
  constructor(game) {
    super(game, "Cephalid Constable", "Tenth Edition", "10E");
  }
}

module.exports = CephalidConstable;
