"use strict";
const Constants = require ("../../../Constants");
const MarwyntheNurturerBase = require("../setDOM/MarwyntheNurturer");

class MarwyntheNurturer extends MarwyntheNurturerBase {
  constructor (game) {
    super(game, "Marwyn, the Nurturer", "Dominaria Promos", "PDOM");
  }
}

module.exports = MarwyntheNurturer;
