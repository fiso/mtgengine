"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ShinenofLifesRoarBase = require("../setARC/ShinenofLifesRoar.js");

class ShinenofLifesRoar extends ShinenofLifesRoarBase {
  constructor(game) {
    super(game, "Shinen of Life's Roar", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = ShinenofLifesRoar;
