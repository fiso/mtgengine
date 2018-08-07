"use strict";
const Constants = require ("../../../Constants");
const VexingShusherBase = require("../setSHM/VexingShusher");

class VexingShusher extends VexingShusherBase {
  constructor (game) {
    super(game, "Vexing Shusher", "Magic Online Promos", "PRM");
  }
}

module.exports = VexingShusher;
