"use strict";
const Constants = require ("../../../Constants");
const DjinnMonkBase = require("../setTIMA/DjinnMonk");

class DjinnMonk extends DjinnMonkBase {
  constructor (game) {
    super(game, "Djinn Monk", "Dragons of Tarkir Tokens", "TDTK");
  }
}

module.exports = DjinnMonk;
