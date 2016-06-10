"use strict";
const Constants = require ("../../../Constants");
const RayofRevelationBase = require("../setDKA/RayofRevelation");

class RayofRevelation extends RayofRevelationBase {
  constructor (game) {
    super(game, "Ray of Revelation", "Judgment", "JUD");
  }
}

module.exports = RayofRevelation;
