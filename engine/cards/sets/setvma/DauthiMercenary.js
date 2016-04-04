"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DauthiMercenaryBase = require("../setTMP/DauthiMercenary.js");

class DauthiMercenary extends DauthiMercenaryBase {
  constructor(game) {
    super(game, "Dauthi Mercenary", "Vintage Masters", "VMA");
  }
}

module.exports = DauthiMercenary;
