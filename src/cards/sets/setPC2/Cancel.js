"use strict";
const Constants = require ("../../../Constants");
const CancelBase = require("../setM19/Cancel");

class Cancel extends CancelBase {
  constructor (game) {
    super(game, "Cancel", "Planechase 2012", "PC2");
  }
}

module.exports = Cancel;
