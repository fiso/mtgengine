"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ShuEliteCompanionsBase = require("../setME3/ShuEliteCompanions.js");

class ShuEliteCompanions extends ShuEliteCompanionsBase {
  constructor(game) {
    super(game, "Shu Elite Companions", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = ShuEliteCompanions;
