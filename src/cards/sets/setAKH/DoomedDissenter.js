"use strict";
const Constants = require ("../../../Constants");
const DoomedDissenterBase = require("../setM19/DoomedDissenter");

class DoomedDissenter extends DoomedDissenterBase {
  constructor (game) {
    super(game, "Doomed Dissenter", "Amonkhet", "AKH");
  }
}

module.exports = DoomedDissenter;
