"use strict";
const Constants = require ("../../../Constants");
const AetherMembraneBase = require("../setDDI/AetherMembrane");

class AetherMembrane extends AetherMembraneBase {
  constructor(game) {
    super(game, "Æther Membrane", "Planar Chaos", "PLC");
  }
}

module.exports = AetherMembrane;
