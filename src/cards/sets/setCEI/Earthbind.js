"use strict";
const Constants = require ("../../../Constants");
const EarthbindBase = require("../setCED/Earthbind");

class Earthbind extends EarthbindBase {
  constructor (game) {
    super(game, "Earthbind", "International Collector's Edition", "CEI");
  }
}

module.exports = Earthbind;
