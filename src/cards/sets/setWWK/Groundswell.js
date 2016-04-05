"use strict";
const Constants = require ("../../../Constants");
const GroundswellBase = require("../setDDP/Groundswell");

class Groundswell extends GroundswellBase {
  constructor(game) {
    super(game, "Groundswell", "Worldwake", "WWK");
  }
}

module.exports = Groundswell;
