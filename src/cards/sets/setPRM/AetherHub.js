"use strict";
const Constants = require ("../../../Constants");
const AetherHubBase = require("../setF17/AetherHub");

class AetherHub extends AetherHubBase {
  constructor (game) {
    super(game, "Aether Hub", "Magic Online Promos", "PRM");
  }
}

module.exports = AetherHub;
