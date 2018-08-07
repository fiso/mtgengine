"use strict";
const Constants = require ("../../../Constants");
const MountKeraliaBase = require("../setPCA/MountKeralia");

class MountKeralia extends MountKeraliaBase {
  constructor (game) {
    super(game, "Mount Keralia", "Planechase 2012", "PC2");
  }
}

module.exports = MountKeralia;
