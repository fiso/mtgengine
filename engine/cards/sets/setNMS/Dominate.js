"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DominateBase = require("../setC15/Dominate.js");

class Dominate extends DominateBase {
  constructor(game) {
    super(game, "Dominate", "Nemesis", "NMS");
  }
}

module.exports = Dominate;
