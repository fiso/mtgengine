"use strict";
const Constants = require ("../../../Constants");
const UrborgUprisingBase = require("../setEMA/UrborgUprising");

class UrborgUprising extends UrborgUprisingBase {
  constructor (game) {
    super(game, "Urborg Uprising", "Vintage Masters", "VMA");
  }
}

module.exports = UrborgUprising;
