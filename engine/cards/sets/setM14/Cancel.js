"use strict";
const Constants = require ("../../../Constants");
const CancelBase = require("../setDPA/Cancel");

class Cancel extends CancelBase {
  constructor(game) {
    super(game, "Cancel", "Magic 2014 Core Set", "M14");
  }
}

module.exports = Cancel;
