"use strict";
const Constants = require ("../../../Constants");
const DenyRealityBase = require("../setARB/DenyReality");

class DenyReality extends DenyRealityBase {
  constructor(game) {
    super(game, "Deny Reality", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = DenyReality;
