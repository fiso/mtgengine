"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CobraTrapBase = require("../setC15/CobraTrap.js");

class CobraTrap extends CobraTrapBase {
  constructor(game) {
    super(game, "Cobra Trap", "Zendikar", "ZEN");
  }
}

module.exports = CobraTrap;
