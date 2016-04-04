"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const KjeldoranHomeGuardBase = require("../setALL/KjeldoranHomeGuard.js");

class KjeldoranHomeGuard extends KjeldoranHomeGuardBase {
  constructor(game) {
    super(game, "Kjeldoran Home Guard", "Masters Edition II", "ME2");
  }
}

module.exports = KjeldoranHomeGuard;
