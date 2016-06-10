"use strict";
const Constants = require ("../../../Constants");
const DespoticScepterBase = require("../setICE/DespoticScepter");

class DespoticScepter extends DespoticScepterBase {
  constructor (game) {
    super(game, "Despotic Scepter", "Masters Edition II", "ME2");
  }
}

module.exports = DespoticScepter;
