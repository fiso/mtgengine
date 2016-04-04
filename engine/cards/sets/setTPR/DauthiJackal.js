"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DauthiJackalBase = require("../setEXO/DauthiJackal.js");

class DauthiJackal extends DauthiJackalBase {
  constructor(game) {
    super(game, "Dauthi Jackal", "Tempest Remastered", "TPR");
  }
}

module.exports = DauthiJackal;
