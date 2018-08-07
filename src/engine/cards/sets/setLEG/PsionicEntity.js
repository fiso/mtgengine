"use strict";
const Constants = require ("../../../Constants");
const PsionicEntityBase = require("../set4ED/PsionicEntity");

class PsionicEntity extends PsionicEntityBase {
  constructor (game) {
    super(game, "Psionic Entity", "Legends", "LEG");
  }
}

module.exports = PsionicEntity;
