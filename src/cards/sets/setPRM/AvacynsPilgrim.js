"use strict";
const Constants = require ("../../../Constants");
const AvacynsPilgrimBase = require("../setMM3/AvacynsPilgrim");

class AvacynsPilgrim extends AvacynsPilgrimBase {
  constructor (game) {
    super(game, "Avacyn's Pilgrim", "Magic Online Promos", "PRM");
  }
}

module.exports = AvacynsPilgrim;
