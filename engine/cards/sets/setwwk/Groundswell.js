"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GroundswellBase = require("../setDDP/Groundswell.js");

class Groundswell extends GroundswellBase {
  constructor(game) {
    super(game, "Groundswell", "Worldwake", "WWK");
  }
}

module.exports = Groundswell;
