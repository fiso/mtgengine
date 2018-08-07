"use strict";
const Constants = require ("../../../Constants");
const HarbingeroftheHuntBase = require("../setDTK/HarbingeroftheHunt");

class HarbingeroftheHunt extends HarbingeroftheHuntBase {
  constructor (game) {
    super(game, "Harbinger of the Hunt", "Dragons of Tarkir Promos", "PDTK");
  }
}

module.exports = HarbingeroftheHunt;
