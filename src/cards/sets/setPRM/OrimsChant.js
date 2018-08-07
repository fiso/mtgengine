"use strict";
const Constants = require ("../../../Constants");
const OrimsChantBase = require("../setG08/OrimsChant");

class OrimsChant extends OrimsChantBase {
  constructor (game) {
    super(game, "Orim's Chant", "Magic Online Promos", "PRM");
  }
}

module.exports = OrimsChant;
