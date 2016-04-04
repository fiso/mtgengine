"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const VoidmageHusherBase = require("../setpMEI/VoidmageHusher.js");

class VoidmageHusher extends VoidmageHusherBase {
  constructor(game) {
    super(game, "Voidmage Husher", "Time Spiral", "TSP");
  }
}

module.exports = VoidmageHusher;
