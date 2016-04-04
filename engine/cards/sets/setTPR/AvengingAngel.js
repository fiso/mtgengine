"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AvengingAngelBase = require("../setTMP/AvengingAngel.js");

class AvengingAngel extends AvengingAngelBase {
  constructor(game) {
    super(game, "Avenging Angel", "Tempest Remastered", "TPR");
  }
}

module.exports = AvengingAngel;
