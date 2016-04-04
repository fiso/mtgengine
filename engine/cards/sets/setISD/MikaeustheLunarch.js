"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MikaeustheLunarchBase = require("../setV11/MikaeustheLunarch.js");

class MikaeustheLunarch extends MikaeustheLunarchBase {
  constructor(game) {
    super(game, "Mikaeus, the Lunarch", "Innistrad", "ISD");
  }
}

module.exports = MikaeustheLunarch;
