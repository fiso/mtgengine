"use strict";
const Constants = require ("../../../Constants");
const VoidmageHusherBase = require("../setPI13/VoidmageHusher");

class VoidmageHusher extends VoidmageHusherBase {
  constructor (game) {
    super(game, "Voidmage Husher", "Time Spiral", "TSP");
  }
}

module.exports = VoidmageHusher;
