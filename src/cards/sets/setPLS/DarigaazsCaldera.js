"use strict";
const Constants = require ("../../../Constants");
const DarigaazsCalderaBase = require("../setTD0/DarigaazsCaldera");

class DarigaazsCaldera extends DarigaazsCalderaBase {
  constructor (game) {
    super(game, "Darigaaz's Caldera", "Planeshift", "PLS");
  }
}

module.exports = DarigaazsCaldera;
