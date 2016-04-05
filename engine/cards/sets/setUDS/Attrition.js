"use strict";
const Constants = require ("../../../Constants");
const AttritionBase = require("../setCMD/Attrition");

class Attrition extends AttritionBase {
  constructor(game) {
    super(game, "Attrition", "Urza's Destiny", "UDS");
  }
}

module.exports = Attrition;
