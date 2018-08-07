"use strict";
const Constants = require ("../../../Constants");
const CancelBase = require("../setM19/Cancel");

class Cancel extends CancelBase {
  constructor (game) {
    super(game, "Cancel", "Magic 2014", "M14");
  }
}

module.exports = Cancel;
