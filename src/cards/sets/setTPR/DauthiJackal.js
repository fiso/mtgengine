"use strict";
const Constants = require ("../../../Constants");
const DauthiJackalBase = require("../setEXO/DauthiJackal");

class DauthiJackal extends DauthiJackalBase {
  constructor (game) {
    super(game, "Dauthi Jackal", "Tempest Remastered", "TPR");
  }
}

module.exports = DauthiJackal;
