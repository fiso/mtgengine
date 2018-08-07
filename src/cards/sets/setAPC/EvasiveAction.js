"use strict";
const Constants = require ("../../../Constants");
const EvasiveActionBase = require("../setDDE/EvasiveAction");

class EvasiveAction extends EvasiveActionBase {
  constructor (game) {
    super(game, "Evasive Action", "Apocalypse", "APC");
  }
}

module.exports = EvasiveAction;
