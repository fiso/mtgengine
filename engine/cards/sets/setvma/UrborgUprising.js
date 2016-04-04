"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const UrborgUprisingBase = require("../setAPC/UrborgUprising.js");

class UrborgUprising extends UrborgUprisingBase {
  constructor(game) {
    super(game, "Urborg Uprising", "Vintage Masters", "VMA");
  }
}

module.exports = UrborgUprising;
