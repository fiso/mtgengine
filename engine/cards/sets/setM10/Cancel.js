"use strict";
const Constants = require ("../../../Constants");
const CancelBase = require("../setDPA/Cancel");

class Cancel extends CancelBase {
  constructor(game) {
    super(game, "Cancel", "Magic 2010", "M10");
  }
}

module.exports = Cancel;
