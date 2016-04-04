"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AmbitionsCostBase = require("../setC15/AmbitionsCost.js");

class AmbitionsCost extends AmbitionsCostBase {
  constructor(game) {
    super(game, "Ambition's Cost", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = AmbitionsCost;
