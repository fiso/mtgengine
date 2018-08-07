"use strict";
const Constants = require ("../../../Constants");
const BacktoNatureBase = require("../setM15/BacktoNature");

class BacktoNature extends BacktoNatureBase {
  constructor (game) {
    super(game, "Back to Nature", "Magic 2011", "M11");
  }
}

module.exports = BacktoNature;
