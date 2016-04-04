"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GravebindBase = require("../setICE/Gravebind.js");

class Gravebind extends GravebindBase {
  constructor(game) {
    super(game, "Gravebind", "Masters Edition IV", "ME4");
  }
}

module.exports = Gravebind;
