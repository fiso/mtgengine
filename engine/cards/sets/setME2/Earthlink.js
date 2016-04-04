"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const EarthlinkBase = require("../setICE/Earthlink.js");

class Earthlink extends EarthlinkBase {
  constructor(game) {
    super(game, "Earthlink", "Masters Edition II", "ME2");
  }
}

module.exports = Earthlink;
