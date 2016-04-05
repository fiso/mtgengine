"use strict";
const Constants = require ("../../../Constants");
const ShinenofLifesRoarBase = require("../setARC/ShinenofLifesRoar");

class ShinenofLifesRoar extends ShinenofLifesRoarBase {
  constructor(game) {
    super(game, "Shinen of Life's Roar", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = ShinenofLifesRoar;
