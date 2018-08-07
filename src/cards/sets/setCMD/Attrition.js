"use strict";
const Constants = require ("../../../Constants");
const AttritionBase = require("../setMP2/Attrition");

class Attrition extends AttritionBase {
  constructor (game) {
    super(game, "Attrition", "Commander 2011", "CMD");
  }
}

module.exports = Attrition;
