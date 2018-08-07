"use strict";
const Constants = require ("../../../Constants");
const DenyRealityBase = require("../setPCA/DenyReality");

class DenyReality extends DenyRealityBase {
  constructor (game) {
    super(game, "Deny Reality", "Alara Reborn", "ARB");
  }
}

module.exports = DenyReality;
