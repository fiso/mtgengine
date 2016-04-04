"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DisruptingScepterBase = require("../set6ED/DisruptingScepter.js");

class DisruptingScepter extends DisruptingScepterBase {
  constructor(game) {
    super(game, "Disrupting Scepter", "Limited Edition Beta", "LEB");
  }
}

module.exports = DisruptingScepter;
