"use strict";
const Constants = require ("../../../Constants");
const DauthiJackalBase = require("../setTPR/DauthiJackal");

class DauthiJackal extends DauthiJackalBase {
  constructor (game) {
    super(game, "Dauthi Jackal", "Exodus", "EXO");
  }
}

module.exports = DauthiJackal;
