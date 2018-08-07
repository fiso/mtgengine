"use strict";
const Constants = require ("../../../Constants");
const GaseousFormBase = require("../setEMA/GaseousForm");

class GaseousForm extends GaseousFormBase {
  constructor (game) {
    super(game, "Gaseous Form", "Tempest", "TMP");
  }
}

module.exports = GaseousForm;
