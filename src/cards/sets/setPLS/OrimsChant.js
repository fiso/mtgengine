"use strict";
const Constants = require ("../../../Constants");
const OrimsChantBase = require("../setG08/OrimsChant");

class OrimsChant extends OrimsChantBase {
  constructor (game) {
    super(game, "Orim's Chant", "Planeshift", "PLS");
  }
}

module.exports = OrimsChant;
