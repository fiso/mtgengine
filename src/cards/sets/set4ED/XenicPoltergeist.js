"use strict";
const Constants = require ("../../../Constants");
const XenicPoltergeistBase = require("../setATQ/XenicPoltergeist");

class XenicPoltergeist extends XenicPoltergeistBase {
  constructor(game) {
    super(game, "Xenic Poltergeist", "Fourth Edition", "4ED");
  }
}

module.exports = XenicPoltergeist;
