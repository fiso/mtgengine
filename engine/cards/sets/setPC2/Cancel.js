"use strict";
const Constants = require ("../../../Constants");
const CancelBase = require("../setDPA/Cancel");

class Cancel extends CancelBase {
  constructor(game) {
    super(game, "Cancel", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = Cancel;
