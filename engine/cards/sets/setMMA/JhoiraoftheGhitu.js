"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const JhoiraoftheGhituBase = require("../setFUT/JhoiraoftheGhitu.js");

class JhoiraoftheGhitu extends JhoiraoftheGhituBase {
  constructor(game) {
    super(game, "Jhoira of the Ghitu", "Modern Masters", "MMA");
  }
}

module.exports = JhoiraoftheGhitu;
