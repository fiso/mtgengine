"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ClayStatueBase = require("../setATQ/ClayStatue.js");

class ClayStatue extends ClayStatueBase {
  constructor(game) {
    super(game, "Clay Statue", "Masters Edition IV", "ME4");
  }
}

module.exports = ClayStatue;
