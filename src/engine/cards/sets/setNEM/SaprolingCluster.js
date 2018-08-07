"use strict";
const Constants = require ("../../../Constants");
const SaprolingClusterBase = require("../setWC00/SaprolingCluster");

class SaprolingCluster extends SaprolingClusterBase {
  constructor (game) {
    super(game, "Saproling Cluster", "Nemesis", "NEM");
  }
}

module.exports = SaprolingCluster;
