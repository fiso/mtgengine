"use strict";
const Constants = require ("../../../Constants");
const XenicPoltergeistBase = require("../setME4/XenicPoltergeist");

class XenicPoltergeist extends XenicPoltergeistBase {
  constructor (game) {
    super(game, "Xenic Poltergeist", "Antiquities", "ATQ");
  }
}

module.exports = XenicPoltergeist;
