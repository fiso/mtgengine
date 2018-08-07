"use strict";
const Constants = require ("../../../Constants");
const LavalancheBase = require("../setC18/Lavalanche");

class Lavalanche extends LavalancheBase {
  constructor (game) {
    super(game, "Lavalanche", "Commander 2016", "C16");
  }
}

module.exports = Lavalanche;
