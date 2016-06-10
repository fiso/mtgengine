"use strict";
const Constants = require ("../../../Constants");
const CancelBase = require("../setDPA/Cancel");

class Cancel extends CancelBase {
  constructor (game) {
    super(game, "Cancel", "Magic 2011", "M11");
  }
}

module.exports = Cancel;
