"use strict";
const Constants = require ("../../../Constants");
const MisinformationBase = require("../setALL/Misinformation");

class Misinformation extends MisinformationBase {
  constructor (game) {
    super(game, "Misinformation", "Masters Edition II", "ME2");
  }
}

module.exports = Misinformation;
