"use strict";
const Constants = require ("../../../Constants");
const GrixisBase = require("../setPCA/Grixis");

class Grixis extends GrixisBase {
  constructor (game) {
    super(game, "Grixis", "Planechase", "HOP");
  }
}

module.exports = Grixis;
