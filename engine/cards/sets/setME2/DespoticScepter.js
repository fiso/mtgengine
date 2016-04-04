"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DespoticScepterBase = require("../setICE/DespoticScepter.js");

class DespoticScepter extends DespoticScepterBase {
  constructor(game) {
    super(game, "Despotic Scepter", "Masters Edition II", "ME2");
  }
}

module.exports = DespoticScepter;
