"use strict";
const Constants = require ("../../../Constants");
const DisruptingScepterBase = require("../set6ED/DisruptingScepter");

class DisruptingScepter extends DisruptingScepterBase {
  constructor (game) {
    super(game, "Disrupting Scepter", "Fourth Edition", "4ED");
  }
}

module.exports = DisruptingScepter;
