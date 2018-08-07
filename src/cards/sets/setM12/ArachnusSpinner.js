"use strict";
const Constants = require ("../../../Constants");
const ArachnusSpinnerBase = require("../setMM3/ArachnusSpinner");

class ArachnusSpinner extends ArachnusSpinnerBase {
  constructor (game) {
    super(game, "Arachnus Spinner", "Magic 2012", "M12");
  }
}

module.exports = ArachnusSpinner;
