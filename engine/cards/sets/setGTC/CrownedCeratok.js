"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CrownedCeratokBase = require("../setDDL/CrownedCeratok.js");

class CrownedCeratok extends CrownedCeratokBase {
  constructor(game) {
    super(game, "Crowned Ceratok", "Gatecrash", "GTC");
  }
}

module.exports = CrownedCeratok;
