"use strict";
const Constants = require ("../../../Constants");
const VoidmageHusherBase = require("../setpMEI/VoidmageHusher");

class VoidmageHusher extends VoidmageHusherBase {
  constructor(game) {
    super(game, "Voidmage Husher", "Time Spiral", "TSP");
  }
}

module.exports = VoidmageHusher;
