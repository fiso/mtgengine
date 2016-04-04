"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WeiEliteCompanionsBase = require("../setME3/WeiEliteCompanions.js");

class WeiEliteCompanions extends WeiEliteCompanionsBase {
  constructor(game) {
    super(game, "Wei Elite Companions", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = WeiEliteCompanions;
