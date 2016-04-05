"use strict";
const Constants = require ("../../../Constants");
const GaseousFormBase = require("../setBTD/GaseousForm");

class GaseousForm extends GaseousFormBase {
  constructor(game) {
    super(game, "Gaseous Form", "Classic Sixth Edition", "6ED");
  }
}

module.exports = GaseousForm;
