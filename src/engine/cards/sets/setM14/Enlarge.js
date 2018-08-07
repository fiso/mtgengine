"use strict";
const Constants = require ("../../../Constants");
const EnlargeBase = require("../setIMA/Enlarge");

class Enlarge extends EnlargeBase {
  constructor (game) {
    super(game, "Enlarge", "Magic 2014", "M14");
  }
}

module.exports = Enlarge;
