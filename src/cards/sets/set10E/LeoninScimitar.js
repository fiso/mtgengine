"use strict";
const Constants = require ("../../../Constants");
const LeoninScimitarBase = require("../setMRD/LeoninScimitar");

class LeoninScimitar extends LeoninScimitarBase {
  constructor (game) {
    super(game, "Leonin Scimitar", "Tenth Edition", "10E");
  }
}

module.exports = LeoninScimitar;
