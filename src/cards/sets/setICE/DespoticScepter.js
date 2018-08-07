"use strict";
const Constants = require ("../../../Constants");
const DespoticScepterBase = require("../setME2/DespoticScepter");

class DespoticScepter extends DespoticScepterBase {
  constructor (game) {
    super(game, "Despotic Scepter", "Ice Age", "ICE");
  }
}

module.exports = DespoticScepter;
