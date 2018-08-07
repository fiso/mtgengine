"use strict";
const Constants = require ("../../../Constants");
const CrownedCeratokBase = require("../setIMA/CrownedCeratok");

class CrownedCeratok extends CrownedCeratokBase {
  constructor (game) {
    super(game, "Crowned Ceratok", "Gatecrash", "GTC");
  }
}

module.exports = CrownedCeratok;
