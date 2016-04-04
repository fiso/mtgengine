"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const NarwhalBase = require("../setHML/Narwhal.js");

class Narwhal extends NarwhalBase {
  constructor(game) {
    super(game, "Narwhal", "Masters Edition II", "ME2");
  }
}

module.exports = Narwhal;
