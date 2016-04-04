"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RayofRevelationBase = require("../setDKA/RayofRevelation.js");

class RayofRevelation extends RayofRevelationBase {
  constructor(game) {
    super(game, "Ray of Revelation", "Judgment", "JUD");
  }
}

module.exports = RayofRevelation;
