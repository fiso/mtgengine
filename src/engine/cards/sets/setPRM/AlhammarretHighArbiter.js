"use strict";
const Constants = require ("../../../Constants");
const AlhammarretHighArbiterBase = require("../setPORI/AlhammarretHighArbiter");

class AlhammarretHighArbiter extends AlhammarretHighArbiterBase {
  constructor (game) {
    super(game, "Alhammarret, High Arbiter", "Magic Online Promos", "PRM");
  }
}

module.exports = AlhammarretHighArbiter;
