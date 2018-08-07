"use strict";
const Constants = require ("../../../Constants");
const AnathemancerBase = require("../setF10/Anathemancer");

class Anathemancer extends AnathemancerBase {
  constructor (game) {
    super(game, "Anathemancer", "Magic Online Promos", "PRM");
  }
}

module.exports = Anathemancer;
