"use strict";
const Constants = require ("../../../Constants");
const DauthiMercenaryBase = require("../setTMP/DauthiMercenary");

class DauthiMercenary extends DauthiMercenaryBase {
  constructor(game) {
    super(game, "Dauthi Mercenary", "Vintage Masters", "VMA");
  }
}

module.exports = DauthiMercenary;
