"use strict";
const Constants = require ("../../../Constants");
const FesteringNewtBase = require("../setIMA/FesteringNewt");

class FesteringNewt extends FesteringNewtBase {
  constructor (game) {
    super(game, "Festering Newt", "Magic 2014", "M14");
  }
}

module.exports = FesteringNewt;
