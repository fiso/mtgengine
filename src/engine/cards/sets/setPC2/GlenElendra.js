"use strict";
const Constants = require ("../../../Constants");
const GlenElendraBase = require("../setPCA/GlenElendra");

class GlenElendra extends GlenElendraBase {
  constructor (game) {
    super(game, "Glen Elendra", "Planechase 2012", "PC2");
  }
}

module.exports = GlenElendra;
