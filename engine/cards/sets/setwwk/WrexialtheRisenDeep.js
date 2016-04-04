"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WrexialtheRisenDeepBase = require("../setCMD/WrexialtheRisenDeep.js");

class WrexialtheRisenDeep extends WrexialtheRisenDeepBase {
  constructor(game) {
    super(game, "Wrexial, the Risen Deep", "Worldwake", "WWK");
  }
}

module.exports = WrexialtheRisenDeep;
