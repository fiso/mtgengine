"use strict";
const Constants = require ("../../../Constants");
const PanopticonBase = require("../setPCA/Panopticon");

class Panopticon extends PanopticonBase {
  constructor (game) {
    super(game, "Panopticon", "Planechase", "HOP");
  }
}

module.exports = Panopticon;
