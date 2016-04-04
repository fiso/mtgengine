"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const IvoryGargoyleBase = require("../setALL/IvoryGargoyle.js");

class IvoryGargoyle extends IvoryGargoyleBase {
  constructor(game) {
    super(game, "Ivory Gargoyle", "Masters Edition II", "ME2");
  }
}

module.exports = IvoryGargoyle;
