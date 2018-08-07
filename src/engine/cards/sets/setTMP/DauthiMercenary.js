"use strict";
const Constants = require ("../../../Constants");
const DauthiMercenaryBase = require("../setVMA/DauthiMercenary");

class DauthiMercenary extends DauthiMercenaryBase {
  constructor (game) {
    super(game, "Dauthi Mercenary", "Tempest", "TMP");
  }
}

module.exports = DauthiMercenary;
