"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GravenCairnsBase = require("../setFUT/GravenCairns.js");

class GravenCairns extends GravenCairnsBase {
  constructor(game) {
    super(game, "Graven Cairns", "Zendikar Expedition", "EXP");
  }
}

module.exports = GravenCairns;
