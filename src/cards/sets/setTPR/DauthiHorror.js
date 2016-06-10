"use strict";
const Constants = require ("../../../Constants");
const DauthiHorrorBase = require("../setTMP/DauthiHorror");

class DauthiHorror extends DauthiHorrorBase {
  constructor (game) {
    super(game, "Dauthi Horror", "Tempest Remastered", "TPR");
  }
}

module.exports = DauthiHorror;
