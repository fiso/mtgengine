"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const UnknownShoresBase = require("../setOGW/UnknownShores.js");

class UnknownShores extends UnknownShoresBase {
  constructor(game) {
    super(game, "Unknown Shores", "Theros", "THS");
  }
}

module.exports = UnknownShores;
