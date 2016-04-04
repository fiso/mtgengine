"use strict";
const Constants = require ("../../../Constants");
const ÆtherMembraneBase = require("../setDDI/ÆtherMembrane");

class ÆtherMembrane extends ÆtherMembraneBase {
  constructor(game) {
    super(game, "Æther Membrane", "Planar Chaos", "PLC");
  }
}

module.exports = ÆtherMembrane;
