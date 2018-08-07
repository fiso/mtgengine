"use strict";
const Constants = require ("../../../Constants");
const DauthiHorrorBase = require("../setTPR/DauthiHorror");

class DauthiHorror extends DauthiHorrorBase {
  constructor (game) {
    super(game, "Dauthi Horror", "Tempest", "TMP");
  }
}

module.exports = DauthiHorror;
