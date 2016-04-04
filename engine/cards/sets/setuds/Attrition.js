"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AttritionBase = require("../setCMD/Attrition.js");

class Attrition extends AttritionBase {
  constructor(game) {
    super(game, "Attrition", "Urza's Destiny", "UDS");
  }
}

module.exports = Attrition;
