"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const VexingArcanixBase = require("../set8ED/VexingArcanix.js");

class VexingArcanix extends VexingArcanixBase {
  constructor(game) {
    super(game, "Vexing Arcanix", "Ice Age", "ICE");
  }
}

module.exports = VexingArcanix;
