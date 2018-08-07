"use strict";
const Constants = require ("../../../Constants");
const IvoryGargoyleBase = require("../setME2/IvoryGargoyle");

class IvoryGargoyle extends IvoryGargoyleBase {
  constructor (game) {
    super(game, "Ivory Gargoyle", "Alliances", "ALL");
  }
}

module.exports = IvoryGargoyle;
