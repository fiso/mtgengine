"use strict";
const Constants = require ("../../../Constants");
const VexingArcanixBase = require("../set8ED/VexingArcanix");

class VexingArcanix extends VexingArcanixBase {
  constructor (game) {
    super(game, "Vexing Arcanix", "Ice Age", "ICE");
  }
}

module.exports = VexingArcanix;
