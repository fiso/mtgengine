"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AkoumRefugeBase = require("../setC13/AkoumRefuge.js");

class AkoumRefuge extends AkoumRefugeBase {
  constructor(game) {
    super(game, "Akoum Refuge", "Zendikar", "ZEN");
  }
}

module.exports = AkoumRefuge;
