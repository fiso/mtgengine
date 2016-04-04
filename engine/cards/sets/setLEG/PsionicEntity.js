"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PsionicEntityBase = require("../set4ED/PsionicEntity.js");

class PsionicEntity extends PsionicEntityBase {
  constructor(game) {
    super(game, "Psionic Entity", "Legends", "LEG");
  }
}

module.exports = PsionicEntity;
