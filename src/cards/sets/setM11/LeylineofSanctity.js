"use strict";
const Constants = require ("../../../Constants");
const LeylineofSanctityBase = require("../setMM2/LeylineofSanctity");

class LeylineofSanctity extends LeylineofSanctityBase {
  constructor (game) {
    super(game, "Leyline of Sanctity", "Magic 2011", "M11");
  }
}

module.exports = LeylineofSanctity;
