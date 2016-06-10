"use strict";
const Constants = require ("../../../Constants");
const XenicPoltergeistBase = require("../setATQ/XenicPoltergeist");

class XenicPoltergeist extends XenicPoltergeistBase {
  constructor (game) {
    super(game, "Xenic Poltergeist", "Masters Edition IV", "ME4");
  }
}

module.exports = XenicPoltergeist;
