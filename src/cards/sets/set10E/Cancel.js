"use strict";
const Constants = require ("../../../Constants");
const CancelBase = require("../setDPA/Cancel");

class Cancel extends CancelBase {
  constructor(game) {
    super(game, "Cancel", "Tenth Edition", "10E");
  }
}

module.exports = Cancel;
