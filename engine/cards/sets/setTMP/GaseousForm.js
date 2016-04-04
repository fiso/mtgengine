"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GaseousFormBase = require("../setBTD/GaseousForm.js");

class GaseousForm extends GaseousFormBase {
  constructor(game) {
    super(game, "Gaseous Form", "Tempest", "TMP");
  }
}

module.exports = GaseousForm;
