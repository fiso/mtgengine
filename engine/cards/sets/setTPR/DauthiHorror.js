"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DauthiHorrorBase = require("../setTMP/DauthiHorror.js");

class DauthiHorror extends DauthiHorrorBase {
  constructor(game) {
    super(game, "Dauthi Horror", "Tempest Remastered", "TPR");
  }
}

module.exports = DauthiHorror;
