"use strict";
const Constants = require ("../../../Constants");
const ZhalfirinCommanderBase = require("../setDDG/ZhalfirinCommander");

class ZhalfirinCommander extends ZhalfirinCommanderBase {
  constructor(game) {
    super(game, "Zhalfirin Commander", "Mirage", "MIR");
  }
}

module.exports = ZhalfirinCommander;
