"use strict";
const Constants = require ("../../../Constants");
const DoomedDissenterBase = require("../setM19/DoomedDissenter");

class DoomedDissenter extends DoomedDissenterBase {
  constructor (game) {
    super(game, "Doomed Dissenter", "Battlebond", "BBD");
  }
}

module.exports = DoomedDissenter;
