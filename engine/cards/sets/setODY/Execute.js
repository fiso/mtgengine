"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ExecuteBase = require("../set8ED/Execute.js");

class Execute extends ExecuteBase {
  constructor(game) {
    super(game, "Execute", "Odyssey", "ODY");
  }
}

module.exports = Execute;
