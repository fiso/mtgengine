"use strict";
const Constants = require ("../../../Constants");
const AetherMembraneBase = require("../setDDI/AetherMembrane");

class AetherMembrane extends AetherMembraneBase {
  constructor (game) {
    super(game, "Aether Membrane", "Planar Chaos", "PLC");
  }
}

module.exports = AetherMembrane;
