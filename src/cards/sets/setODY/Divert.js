"use strict";
const Constants = require ("../../../Constants");
const DivertBase = require("../setMP2/Divert");

class Divert extends DivertBase {
  constructor (game) {
    super(game, "Divert", "Odyssey", "ODY");
  }
}

module.exports = Divert;
