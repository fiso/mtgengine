"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ÆtherMembraneBase = require("../setDDI/ÆtherMembrane.js");

class ÆtherMembrane extends ÆtherMembraneBase {
  constructor(game) {
    super(game, "Æther Membrane", "Planar Chaos", "PLC");
  }
}

module.exports = ÆtherMembrane;
