"use strict";
const Constants = require ("../../../Constants");
const VexingShusherBase = require("../setpLPA/VexingShusher");

class VexingShusher extends VexingShusherBase {
  constructor (game) {
    super(game, "Vexing Shusher", "Shadowmoor", "SHM");
  }
}

module.exports = VexingShusher;
