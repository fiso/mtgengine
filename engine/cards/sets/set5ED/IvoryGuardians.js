"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const IvoryGuardiansBase = require("../setCHR/IvoryGuardians.js");

class IvoryGuardians extends IvoryGuardiansBase {
  constructor(game) {
    super(game, "Ivory Guardians", "Fifth Edition", "5ED");
  }
}

module.exports = IvoryGuardians;
