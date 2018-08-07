"use strict";
const Constants = require ("../../../Constants");
const AvacynsPilgrimBase = require("../setMM3/AvacynsPilgrim");

class AvacynsPilgrim extends AvacynsPilgrimBase {
  constructor (game) {
    super(game, "Avacyn's Pilgrim", "Friday Night Magic 2012", "F12");
  }
}

module.exports = AvacynsPilgrim;
