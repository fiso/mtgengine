"use strict";
const Constants = require ("../../../Constants");
const CancelBase = require("../setDPA/Cancel");

class Cancel extends CancelBase {
  constructor (game) {
    super(game, "Cancel", "Magic 2015 Core Set", "M15");
  }
}

module.exports = Cancel;
