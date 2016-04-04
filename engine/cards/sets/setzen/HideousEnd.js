"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HideousEndBase = require("../setDD3_GVL/HideousEnd.js");

class HideousEnd extends HideousEndBase {
  constructor(game) {
    super(game, "Hideous End", "Zendikar", "ZEN");
  }
}

module.exports = HideousEnd;
