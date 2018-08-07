"use strict";
const Constants = require ("../../../Constants");
const HandofSilumgarBase = require("../setBBD/HandofSilumgar");

class HandofSilumgar extends HandofSilumgarBase {
  constructor (game) {
    super(game, "Hand of Silumgar", "Dragons of Tarkir", "DTK");
  }
}

module.exports = HandofSilumgar;
