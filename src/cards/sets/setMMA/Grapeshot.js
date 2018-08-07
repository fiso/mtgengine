"use strict";
const Constants = require ("../../../Constants");
const GrapeshotBase = require("../setDDS/Grapeshot");

class Grapeshot extends GrapeshotBase {
  constructor (game) {
    super(game, "Grapeshot", "Modern Masters", "MMA");
  }
}

module.exports = Grapeshot;
