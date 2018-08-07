"use strict";
const Constants = require ("../../../Constants");
const DenyRealityBase = require("../setPCA/DenyReality");

class DenyReality extends DenyRealityBase {
  constructor (game) {
    super(game, "Deny Reality", "Planechase 2012", "PC2");
  }
}

module.exports = DenyReality;
