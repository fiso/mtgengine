"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CarnassidBase = require("../setSTH/Carnassid.js");

class Carnassid extends CarnassidBase {
  constructor(game) {
    super(game, "Carnassid", "Tempest Remastered", "TPR");
  }
}

module.exports = Carnassid;
