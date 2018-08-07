"use strict";
const Constants = require ("../../../Constants");
const KinjallisSunwingBase = require("../setXLN/KinjallisSunwing");

class KinjallisSunwing extends KinjallisSunwingBase {
  constructor (game) {
    super(game, "Kinjalli's Sunwing", "Ixalan Promos", "PXLN");
  }
}

module.exports = KinjallisSunwing;
