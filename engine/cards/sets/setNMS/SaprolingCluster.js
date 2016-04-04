"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SaprolingCluster extends Card {
  constructor(game) {
    super(game, "Saproling Cluster", "Nemesis", "NMS");
  }
}

module.exports = SaprolingCluster;
