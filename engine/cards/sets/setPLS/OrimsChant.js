"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const OrimsChantBase = require("../setpJGP/OrimsChant.js");

class OrimsChant extends OrimsChantBase {
  constructor(game) {
    super(game, "Orim's Chant", "Planeshift", "PLS");
  }
}

module.exports = OrimsChant;
