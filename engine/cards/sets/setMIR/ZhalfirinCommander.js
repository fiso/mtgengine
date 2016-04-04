"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ZhalfirinCommanderBase = require("../setDDG/ZhalfirinCommander.js");

class ZhalfirinCommander extends ZhalfirinCommanderBase {
  constructor(game) {
    super(game, "Zhalfirin Commander", "Mirage", "MIR");
  }
}

module.exports = ZhalfirinCommander;
