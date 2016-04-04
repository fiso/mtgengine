"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DenyRealityBase = require("../setARB/DenyReality.js");

class DenyReality extends DenyRealityBase {
  constructor(game) {
    super(game, "Deny Reality", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = DenyReality;
