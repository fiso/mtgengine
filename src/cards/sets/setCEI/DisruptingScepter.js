"use strict";
const Constants = require ("../../../Constants");
const DisruptingScepterBase = require("../set6ED/DisruptingScepter");

class DisruptingScepter extends DisruptingScepterBase {
  constructor (game) {
    super(game, "Disrupting Scepter", "International Collector's Edition", "CEI");
  }
}

module.exports = DisruptingScepter;
