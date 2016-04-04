"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HinterlandHarbor extends Card {
  constructor(game) {
    super(game, "Hinterland Harbor", "Innistrad", "ISD");
  }
}

module.exports = HinterlandHarbor;
