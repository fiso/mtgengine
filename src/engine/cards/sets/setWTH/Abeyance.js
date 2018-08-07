"use strict";
const Constants = require ("../../../Constants");
const AbeyanceBase = require("../setWC98/Abeyance");

class Abeyance extends AbeyanceBase {
  constructor (game) {
    super(game, "Abeyance", "Weatherlight", "WTH");
  }
}

module.exports = Abeyance;
