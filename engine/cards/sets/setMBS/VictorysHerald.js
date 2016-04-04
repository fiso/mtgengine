"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const VictorysHeraldBase = require("../setC15/VictorysHerald.js");

class VictorysHerald extends VictorysHeraldBase {
  constructor(game) {
    super(game, "Victory's Herald", "Mirrodin Besieged", "MBS");
  }
}

module.exports = VictorysHerald;
