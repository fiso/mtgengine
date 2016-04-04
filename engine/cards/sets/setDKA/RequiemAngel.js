"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RequiemAngelBase = require("../setC14/RequiemAngel.js");

class RequiemAngel extends RequiemAngelBase {
  constructor(game) {
    super(game, "Requiem Angel", "Dark Ascension", "DKA");
  }
}

module.exports = RequiemAngel;
