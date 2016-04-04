"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const VexingShusherBase = require("../setpLPA/VexingShusher.js");

class VexingShusher extends VexingShusherBase {
  constructor(game) {
    super(game, "Vexing Shusher", "Shadowmoor", "SHM");
  }
}

module.exports = VexingShusher;
