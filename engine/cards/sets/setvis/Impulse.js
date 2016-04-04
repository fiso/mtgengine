"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ImpulseBase = require("../setBTD/Impulse.js");

class Impulse extends ImpulseBase {
  constructor(game) {
    super(game, "Impulse", "Visions", "VIS");
  }
}

module.exports = Impulse;
