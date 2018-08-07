"use strict";
const Constants = require ("../../../Constants");
const CarnageGladiatorBase = require("../setMM3/CarnageGladiator");

class CarnageGladiator extends CarnageGladiatorBase {
  constructor (game) {
    super(game, "Carnage Gladiator", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = CarnageGladiator;
