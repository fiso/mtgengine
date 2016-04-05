"use strict";
const Constants = require ("../../../Constants");
const UnknownShoresBase = require("../setOGW/UnknownShores");

class UnknownShores extends UnknownShoresBase {
  constructor(game) {
    super(game, "Unknown Shores", "Theros", "THS");
  }
}

module.exports = UnknownShores;
